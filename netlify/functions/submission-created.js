const { Client } = require("@notionhq/client");
const database_id = "dd010e0a312d481e94dbf93d9d81094d";
exports.handler = async function (event) {
  const form = JSON.parse(event.body).payload.data;
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
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
    await notion.pages.create(new_row);
  } catch {
    console.log(error);
  }
  return {
    statusCode: 200,
  };
};
