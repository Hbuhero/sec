<template>
    <footer class="certchain-footer">
      <div class="flex justify-evenly gap-8">
        <div class="footer-brand">
          <h1>Tanzania CertChain</h1>
          <p>Securing academic credentials with blockchain technology.</p>
        </div>
        
        <div class="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Verify Certificate</a></li>
            <li><a href="#">Admin Panel</a></li>
            <li><a href="#">Documentation</a></li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>support@certchain.tz</li>
            <li>+255 123 456 789</li>
            <li>Dar es Salaam, Tanzania</li>
          </ul>
        </div>
      </div>
      
      
      <div class="text-center">
        <v-divider inset class="mb-4"></v-divider>
        <p>&copy; 2025 Tanzania CertChain. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'CertChainFooter'
  }
  </script>
  
  <style scoped>
  .certchain-footer {
    background-color: #f8f9fa;
    color: #333;
    padding: 2rem 0;
    font-family: 'Arial', sans-serif;
    border-top: 1px solid #e7e7e7;
  }
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .footer-brand h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }
  
  .footer-brand p {
    font-size: 0.9rem;
    color: #7f8c8d;
    max-width: 300px;
  }
  
  .footer-links, .footer-contact {
    margin: 1rem 0;
  }
  
  .footer-links h3, .footer-contact h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #2c3e50;
  }
  
  .footer-links ul, .footer-contact ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-links li, .footer-contact li {
    margin-bottom: 0.5rem;
  }
  
  .footer-links a, .footer-contact a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-links a:hover, .footer-contact a:hover {
    color: #2980b9;
    text-decoration: underline;
  }
  
  .footer-copyright {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #e7e7e7;
    font-size: 0.8rem;
    color: #7f8c8d;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
    }
    
    .footer-brand, .footer-links, .footer-contact {
      margin-bottom: 1.5rem;
    }
  }
  </style>