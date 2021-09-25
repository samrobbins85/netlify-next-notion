export default function Home() {
  return (
    <main>
      <h1>Netlify Forms to Notion</h1>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
        <input type="hidden" name="form-name" value="contact" />
      </form>
    </main>
  );
}
