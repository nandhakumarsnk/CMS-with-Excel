// const { google } = require("googleapis");

// async function getSheetsData() {
//   const auth = new google.auth.GoogleAuth({
//     credentials: {
//       client_email: "sheets@pivotal-myth-418313.iam.gserviceaccount.com",
//       private_key:
//         "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtmd2MnaaYosjL\nDFBn0otCdmuoAYZY7DEya6XBWVdg2Jm+1GM0nIhUTeA+QPBBa6MSJbDntSkM3YW1\nbzXZk1yA6h1NychJcExX6dy2lqRg8NcN9U4p/gCd9TTVyLilH6t82S+NufeMAmx6\nYoIz+Nbrb3vbdmVpZMWqIvpWsMSN2kYbQa8aEtRN+KadL9BQLsOStxqtUaUIDt4g\nB0RzR0N2HV6b9/LGMn2cbg9m5VBvmf0Fqj0bjZ9DKtdUqPGeGHogOx4nDZhgGO+Y\nwEAI1cmoMDimBCYlfxb7393oH3mwKk04dXrkMKiSXGzn1iNXnjRFFlAECncxWrE0\nAEJSUpixAgMBAAECggEAAtbxeMtbXkPLZQbeidQ30u589FKSEAJNC7YXEAKWG09v\ntF9lAAdPc5GSiXIme+t2z2Uub5vXAA7fkQgwqU5vxOwPbqZOUGU12npI0fPE3JET\n83Z/wNAW0n6gTp7p5kmOVIx46qiQFAo2HApgdtkrKs64B+732bF8SjwoPCLIFEnm\n1JeLDqxsCsLSbLKIIiPOtMotChiPAaJO9dpn/BREI8H4CrxVEphsFnSpDZzvYaiD\nmgvss3yoPnrYWTrtOFUu98VjJffzDPgJhnecgZ5KPevbWQMLcIJY+vWO4ya/rRRh\nY8ei26iOtJfUg7Em9p4IBxe2aguvxhGxn7gC5zGcAQKBgQDbwO40EtutLlB8VEO3\nyODIfbojlX64r792EjYF/p0hfqQEtsTOnWrbg3LpODdEC3/3qW25jbIt6QYfPeyP\nyRPzTQYSLXh8/DpZguYejAYjFgKY+52B4vhV0PEVN14sYv9YnAFIWslJT6GUb0He\nDfz0SB5WdxyUYztyIZmuNzCYSQKBgQDKPCW2rYx5d88L1RydJO5BoD17zePaoJfc\njX2zWtBKFJUZuiAVIbx8KBYDQFq02Kn1dxiDsdTSCSq6776pppfMVBPfO7VXWZRw\nO8ojGrXknC87KN/Y51p1ZJhfckZbq7ixtQtytIdJBAjo0u1tdkmxZDHiNIwExiE6\n6eQKvlqNKQKBgQCEQ5HbS8JmcKrGuhzr//6zDWE8S50y4ay2Du3vG7lNUKC9qZe4\n1+xZ5LsD/e7diKJj2NkOxmcI1Oj3YtkADcFxPdm6lR2g9FrWRz/kANkswvGbTE4X\nwBlB5XlFEMcgphEULwlimCnwcvpIkdIuKXMnQETqO9S6xyMfZXPO9K7N6QKBgCI6\nU9e7P88/K9fA1fryyTBqQn21tx7Fl25ItEGq2R3wpduY2N06vH/2+OLL/Y4mLX3S\nDmAbtP1nd8fz07066O44PLTHkkWab7kfJXMTjj2HAadtn5VCctjzkaZ13NqfEb9h\n+PINA+ijui5NpMml/4r6fkbexeP49J7X/zSiSwkhAoGBAJ26MhIsE7PxxkoxmEhg\np/LlfI8UlfxJrPEbx8R05x72Nt05jjkzKej8CPcKHMLDS8+uKkXZtxP7M5b7q2qv\nCZLvYcUN4LezBLUC4vIruwdDC1FYnhpOT/xW5Bbzpb2A/p5JQx/M/yIklasZRUNK\nctVtLYN9bGCTQJPA84ztnRiG\n-----END PRIVATE KEY-----\n",
//     },
//     scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
//   });
//   const client = await auth.getClient();
//   const sheets = google.sheets({ version: "v4", auth: client });
//   const range = "Sheet1"; // Update the range to fetch data from the entire sheet

//   try {
//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId: "1BoL8kgLHQjDHTKPU_TtFY-rnimrENop3tc3axNP4Hu8",
//       range: range,
//     });
//     console.log("Response:", response.data.values);
//     return extractData(response.data.values);
//   } catch (error) {
//     console.error("Error fetching sheets data:", error);
//     return [];
//   }
// }

// function extractData(data) {
//   //personalInfo
//   const personalInfo = { name: data[1][0], summary: data[1][1] };
//   let socialStart,
//     socialEnd,
//     expStart,
//     expEnd,
//     eduStart,
//     eduEnd,
//     skillsStart,
//     skillsEnd;
//   let exp = [];
//   let edu = [];
//   let skills = [];
//   let socialIcons = [];
//   let i = 0;
//   while (true) {
//     if (data[i][0] === "END") break;

//     if (data[i][0] === "Social Start") {
//       socialStart = i + 2;
//     }
//     if (data[i][0] === "Social End") {
//       socialEnd = i - 1;
//     }
//     if (data[i][0] === "Experience Start") {
//       expStart = i + 2;
//     }
//     if (data[i][0] === "Experience End") {
//       expEnd = i - 1;
//     }

//     if (data[i][0] === "Education Start") {
//       eduStart = i + 2;
//     }
//     if (data[i][0] === "Education End") {
//       eduEnd = i - 1;
//     }

//     if (data[i][0] === "Skills Start") {
//       skillsStart = i + 2;
//     }
//     if (data[i][0] === "Skills End") {
//       skillsEnd = i - 1;
//     }
//     i++;
//   }

//   let start, end;

//   //socialIcons

//   start = socialStart;
//   end = socialEnd;
//   for (; start <= end; start++) {
//     socialIcons.push({
//       fileName: data[start][0],
//       desc: data[start][1],
//       href: data[start][2],
//     });
//   }

//   //experience
//   start = expStart;
//   end = expEnd;
//   for (; start <= end; start++) {
//     exp.push({
//       from: data[start][0],
//       to: data[start][1],
//       title: data[start][2],
//       summary: data[start][3],
//     });
//   }

//   //education
//   start = eduStart;
//   end = eduEnd;
//   for (; start <= end; start++) {
//     edu.push({
//       from: data[start][0],
//       to: data[start][1],
//       title: data[start][2],
//       summary: data[start][3],
//     });
//   }

//   //skills
//   start = skillsStart;
//   end = skillsEnd;
//   for (; start <= end; start++) {
//     skills.push({ name: data[start][0] });
//   }
//   return { personalInfo, socialIcons, exp, edu, skills };
// }

// module.exports = {
//   getSheetsData,
// };

// // Call the function to fetch data
// getSheetsData()
//   .then((data) => {
//     console.log("Extracted Data:", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

const express = require("express");
const { google } = require("googleapis");

const app = express();

// Enable CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Function to fetch data from Google Sheets
async function getSheetsData() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: "sheets@pivotal-myth-418313.iam.gserviceaccount.com",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtmd2MnaaYosjL\nDFBn0otCdmuoAYZY7DEya6XBWVdg2Jm+1GM0nIhUTeA+QPBBa6MSJbDntSkM3YW1\nbzXZk1yA6h1NychJcExX6dy2lqRg8NcN9U4p/gCd9TTVyLilH6t82S+NufeMAmx6\nYoIz+Nbrb3vbdmVpZMWqIvpWsMSN2kYbQa8aEtRN+KadL9BQLsOStxqtUaUIDt4g\nB0RzR0N2HV6b9/LGMn2cbg9m5VBvmf0Fqj0bjZ9DKtdUqPGeGHogOx4nDZhgGO+Y\nwEAI1cmoMDimBCYlfxb7393oH3mwKk04dXrkMKiSXGzn1iNXnjRFFlAECncxWrE0\nAEJSUpixAgMBAAECggEAAtbxeMtbXkPLZQbeidQ30u589FKSEAJNC7YXEAKWG09v\ntF9lAAdPc5GSiXIme+t2z2Uub5vXAA7fkQgwqU5vxOwPbqZOUGU12npI0fPE3JET\n83Z/wNAW0n6gTp7p5kmOVIx46qiQFAo2HApgdtkrKs64B+732bF8SjwoPCLIFEnm\n1JeLDqxsCsLSbLKIIiPOtMotChiPAaJO9dpn/BREI8H4CrxVEphsFnSpDZzvYaiD\nmgvss3yoPnrYWTrtOFUu98VjJffzDPgJhnecgZ5KPevbWQMLcIJY+vWO4ya/rRRh\nY8ei26iOtJfUg7Em9p4IBxe2aguvxhGxn7gC5zGcAQKBgQDbwO40EtutLlB8VEO3\nyODIfbojlX64r792EjYF/p0hfqQEtsTOnWrbg3LpODdEC3/3qW25jbIt6QYfPeyP\nyRPzTQYSLXh8/DpZguYejAYjFgKY+52B4vhV0PEVN14sYv9YnAFIWslJT6GUb0He\nDfz0SB5WdxyUYztyIZmuNzCYSQKBgQDKPCW2rYx5d88L1RydJO5BoD17zePaoJfc\njX2zWtBKFJUZuiAVIbx8KBYDQFq02Kn1dxiDsdTSCSq6776pppfMVBPfO7VXWZRw\nO8ojGrXknC87KN/Y51p1ZJhfckZbq7ixtQtytIdJBAjo0u1tdkmxZDHiNIwExiE6\n6eQKvlqNKQKBgQCEQ5HbS8JmcKrGuhzr//6zDWE8S50y4ay2Du3vG7lNUKC9qZe4\n1+xZ5LsD/e7diKJj2NkOxmcI1Oj3YtkADcFxPdm6lR2g9FrWRz/kANkswvGbTE4X\nwBlB5XlFEMcgphEULwlimCnwcvpIkdIuKXMnQETqO9S6xyMfZXPO9K7N6QKBgCI6\nU9e7P88/K9fA1fryyTBqQn21tx7Fl25ItEGq2R3wpduY2N06vH/2+OLL/Y4mLX3S\nDmAbtP1nd8fz07066O44PLTHkkWab7kfJXMTjj2HAadtn5VCctjzkaZ13NqfEb9h\n+PINA+ijui5NpMml/4r6fkbexeP49J7X/zSiSwkhAoGBAJ26MhIsE7PxxkoxmEhg\np/LlfI8UlfxJrPEbx8R05x72Nt05jjkzKej8CPcKHMLDS8+uKkXZtxP7M5b7q2qv\nCZLvYcUN4LezBLUC4vIruwdDC1FYnhpOT/xW5Bbzpb2A/p5JQx/M/yIklasZRUNK\nctVtLYN9bGCTQJPA84ztnRiG\n-----END PRIVATE KEY-----\n",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });
  const range = "Sheet1"; // Update the range to fetch data from the entire sheet

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: "1BoL8kgLHQjDHTKPU_TtFY-rnimrENop3tc3axNP4Hu8",
      range: range,
    });
    return extractData(response.data.values);
  } catch (error) {
    console.error("Error fetching sheets data:", error);
    throw error;
  }
}

function extractData(data) {
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
}

// Endpoint to fetch data
app.get("/api/data", async (req, res) => {
  try {
    const data = await getSheetsData();
    console.log(data);
    res.json(data); // Send the fetched data as JSON response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
