document.addEventListener('DOMContentLoaded', function() {
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
<footer class="py-5 mt-5 bg-orange text-white">
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-4">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-light text-decoration-none">Auto Quote Request</a></li>
          <li><a href="#" class="text-light text-decoration-none">Home Quote Request</a></li>
          <li><a href="#" class="text-light text-decoration-none">Life Insurance Quote Request</a></li>
          <li><a href="#" class="text-light text-decoration-none">Commercial Insurance Request</a></li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5>Information</h5>
        <ul class="list-unstyled">
          <li><a href="staff.html" class="text-light text-decoration-none">Our Staff</a></li>
          <li><a href="privacy.html" class="text-light text-decoration-none">Privacy Policy</a></li>
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
     <p class="text-white">Website managed by SB Web Studio. All rights reserved.</p>
    </div>
  </div>
</footer>
`;

if (typeof googleTranslateElementInit === 'function') {
  googleTranslateElementInit();
    }
  }
});