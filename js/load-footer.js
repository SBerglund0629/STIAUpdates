document.addEventListener('DOMContentLoaded', function() {
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML =`
<footer class="py-3 mt-3 bg-orange text-white">
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-4">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="InsuranceRequestForm.html" class="text-light text-decoration-none">Personal Insurance Quote Request</a></li>
          <li><a href="LifeInsuranceRequestForm.html" class="text-light text-decoration-none">Life Insurance Quote Request</a></li>
          <li><a href="CommercialRequestForm.html" class="text-light text-decoration-none">Commercial Insurance Request</a></li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5>Information</h5>
        <ul class="list-unstyled">
          <li><a href="OurStaff.html" class="text-light text-decoration-none">Our Staff</a></li>
          <li><a href="PrivacyPolicy.html" class="text-light text-decoration-none">Privacy Policy</a></li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5>Translate this page:</h5>
        <div id="google_translate_element"></div>
      </div>
    </div>

    <hr class="bg-light" />

    <div class="text-center small">
      <p class="mb-1">&copy; Sunrise Texas Insurance Agency</p>
      <p>All content on this website is owned by Sunrise Texas Insurance Agency and our licensors. Do not use without our consent.</p>
     <p class="" id="f4">Website managed by <a href="https://sbwebstudio.com">SB Web Studio</a>. All rights reserved.</p>
    </div>
  </div>
</footer>
`;

if (typeof googleTranslateElementInit === 'function') {
  googleTranslateElementInit();
    }
  }
});