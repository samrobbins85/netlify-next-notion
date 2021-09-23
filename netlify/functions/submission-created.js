const fetch = require("node-fetch");
const database_id = "dd010e0a312d481e94dbf93d9d81094d";
exports.handler = async function (event) {
  const form = JSON.parse(event.body).payload.data;
  try {
    const new_row = {
      parent: {
        database_id: database_id,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: form.name,
              },
            },
          ],
        },
        Email: {
          email: form.email,
        },
      },
    };

    await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        "Notion-Version": "2021-08-16",
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_row),
    });
  } catch {
    console.log(error);
  }
  return {
    statusCode: 301,
    headers: {
      Location: "success",
    },
  };
};
