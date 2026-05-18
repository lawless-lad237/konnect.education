mkdir -p _next/static/forms   # or just deploy root
cat > __forms.html << 'EOF'
<!DOCTYPE html>
<html>
<body>
  <form name="application" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
    <input type="hidden" name="form-name" value="application" />
    <input name="firstName" />
    <input name="lastName" />
    <input name="email" />
    <input name="phone" />
    <input name="course" />
    <input name="bot-field" />
  </form>
</body>
</html>
EOF
