const { Client } = require("@notionhq/client");
exports.handler = async function (event) {
  const form = JSON.parse(event.body).payload.data;
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  try {
    const new_row = {
      parent: {
        database_id: process.env.DATABASE_ID,
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
