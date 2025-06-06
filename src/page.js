export default function handler(req, res) {
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <link
      rel="shortcut icon"
      href="https://favemoji.vercel.app/♥️"
      type="image/x-icon"
    />
    <meta charset="UTF-8" />
    <title>Favemoji</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Comic+Relief:wght@400;700&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap");
      body {
        font-family: "Comic Relief", sans-serif, system-ui, -apple-system,
          BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
          "Open Sans", "Helvetica Neue", sans-serif;
        text-align: center;
        margin: 50px;
        cursor: url("https://favemoji.vercel.app/👆") 15 0, auto;
      }
      h1 {
        font-size: 2em;
        cursor: url("https://favemoji.vercel.app/💬") 15 0, auto;
      }
      p {
        font-size: 1em;
        cursor: url("https://favemoji.vercel.app/💬") 15 0, auto;
      }
      code {
        font-family: "JetBrains Mono", monospace;
        background-color: #f4f4f4;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: url("https://favemoji.vercel.app/💻") 15 0, auto;
      }
      a {
        background-color: #f4f4f4;
        padding: 5px 10px;
        cursor: url("https://favemoji.vercel.app/👌") 15 0, auto;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <h1>Emoji Favicon Generator</h1>
    <p>
      Try visiting <code>/🧑‍💻</code> or <code>/📚</code> to see the emoji as a
      favicon.
    </p>
    <p>Here are some more examples:</p>
    <a href="/🛂">/🛂</a>
    <a href="/🕶️">/🕶️</a>

    <a href="/🔔">/🔔</a>
    <a href="/💻">/💻</a>

    <h1>So, how do I use it?</h1>
    <p>Just add this to your project:</p>
    <code>
      &lt;link rel="icon" href="https://favemoji.vercel.app/🧑‍💻" /&gt;
    </code>
    <p>or add this to your CSS</p>
    <code>
      a { cursor: url("https://favemoji.vercel.app/👆") 15 0, auto; }
    </code>
    <div style="margin-top: 50px">
      <hr />

      <div style="margin-top: 50px">
        made by
        <a
          href="https://github.com/myferr/"
          style="background-color: transparent; padding: 0px"
          >@myferr</a
        >, btw
        <a
          href="https://github.com/myferr/favemoji"
          style="background-color: transparent; padding: 0px"
          >open source :)</a
        >
      </div>
    </div>
  </body>
</html>
  `;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).end(html);
}
