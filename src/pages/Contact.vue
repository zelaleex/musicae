@"
<template>
  <div class="contact container">
    <h1>Contact</h1>
    <p class="lead">Get in touch or find social links.</p>
    <nav class="contact-nav">
      <a href="mailto:a.b@c.com">E-mail cím helye</a>
      <a href="https://www.viertelbarock.com/" target="_blank" rel="noopener noreferrer">ViertelBarock</a>
    </nav>
  </div>
  </template>
  
  <style scoped>
  .contact{padding:2rem 0;color:var(--text)}
  .lead{color:var(--muted)}
  .contact-nav{display:flex;gap:2rem;justify-content:center;margin-top:2rem}
  .contact-nav a{color:var(--accent);text-decoration:none;font-weight:500}
  .contact-nav a:hover{text-decoration:underline}
  </style>