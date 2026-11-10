"""Rebuild ../index.html from these sources.
1. Compile CSS:  npx tailwindcss@3.4.17 -c tailwind.config.js -i input.css -o out.css --minify  (run inside src/)
2. Run:          python3 build.py
"""
import pathlib, re
here = pathlib.Path(__file__).parent
js = (here/"data.js").read_text() + "\n" + (here/"app.js").read_text().replace("__ICONS__", (here/"icons.json").read_text().strip(), 1) + "\n" + (here/"sync.js").read_text()
page = here.parent/"index.html"
html = page.read_text()
html = re.sub(r"<style>.*?</style>", lambda m: "<style>"+(here/"out.css").read_text()+"</style>", html, flags=re.S)
html = re.sub(r"<script>.*?</script>", lambda m: "<script>\n"+js+"\n</script>", html, flags=re.S)
page.write_text(html)
print("built", len(html), "bytes")
