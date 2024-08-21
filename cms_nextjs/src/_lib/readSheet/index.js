const { google } = require("googleapis");

export const getSheetsData = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });
  const range = "Sheet1"; // Update the range to fetch data from the entire sheet

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range,
    });
    console.log("response", response);
    return extractData(response.data.values);
  } catch (error) {
    console.error("Error fetching sheets data:", error);
    return [];
  }
};

const extractData = (data) => {
  let productStart, productEnd, headerStart, headerEnd, footerStart, footerEnd;

  let product = [];
  let header = [];
  let footer = [];
  let i = 0;
  while (true) {
    if (data[i][0] === "END") break;

    if (data[i][0] === "Product Start") {
      productStart = i + 2;
    }
    if (data[i][0] === "Product End") {
      productEnd = i - 1;
    }
    if (data[i][0] === "Header Start") {
      headerStart = i + 2;
    }
    if (data[i][0] === "Header End") {
      headerEnd = i - 1;
    }
    if (data[i][0] === "Footer Start") {
      footerStart = i + 2;
    }
    if (data[i][0] === "Footer End") {
      footerEnd = i - 1;
    }
    i++;
  }

  let start, end;

  //product
  start = productStart;
  end = productEnd;
  for (; start <= end; start++) {
    product.push({
      product: data[start][0],
      price: data[start][1],
      discountPrice: data[start][2],
      category: data[start][3],
      discription: data[start][4],
      image: data[start][5],
    });
  }

  //header
  start = headerStart;
  end = headerEnd;
  for (; start <= end; start++) {
    header.push({
      name: data[start][0],
      logo: data[start][1],
      bannerImage: data[start][2],
      description: data[start][3],
    });
  }

  //footer
  start = footerStart;
  end = footerEnd;
  for (; start <= end; start++) {
    footer.push({
      location: data[start][0],
      phone: data[start][1],
      email: data[start][2],
      discription: data[start][3],
      openingTime: data[start][4],
      facebook: data[start][5],
      instagram: data[start][6],
      twitter: data[start][7],
    });
  }
  return { product, header, footer };
};
