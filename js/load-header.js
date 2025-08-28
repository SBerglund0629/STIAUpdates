document.addEventListener('DOMContentLoaded', function() {
    const headerPlaceholder = document.getElementById('header-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
<div class="alert alert-light mb-0 pb-3 border-bottom">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-3 text-center text-md-start mb-3 mb-md-0">
          <a href="#">
            <img src="Images/Logos/STIALogo.jpg" alt="Sunrise Texas Insurance Logo" class="img-fluid" id="indexlogo">
          </a>
        </div>
        <div class="col-12 col-md-6 d-flex flex-wrap justify-content-center gap-3 mb-3 mb-md-0 contact-info">
                    <p class="m-2"><strong>Houston:</strong> <i class="fas fa-phone-alt"></i> <a href="tel:8326455100">(832) 645-5100</a></p>
                    <p class="m-2"><strong>Lake Jackson:</strong> <i class="fas fa-phone-alt"></i> <a href="tel:9792825500">(979) 282-5500</a></p>
                    <p class="m-2"><strong>Rio Grande Valley:</strong> <i class="fas fa-phone-alt"></i> <a href="tel:9565194663">(956) 519-4663</a></p>
                    <p class="m-2"><strong>Fax:</strong> <i class="fas fa-fax"></i> (979) 393-0038</p>
                    <p class="m-2"><strong>Email:</strong> <i class="fas fa-envelope-open-text"></i> <a href="mailto:docs@sunrisetexas.com">docs@sunrisetexas.com</a></p>
                </div>

                <div class="col-12 col-md-3 text-center text-md-end">
                    <h5 class="mb-2">Se Habla Español</h5>
                    <a href="#" class="btn btn-orange">Contact Us!</a>
                </div>
            </div>
    </div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-dark bg-light" id='navBar'>
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item active ">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link custom-dropdown-link" href="#" id="navbarDropdownMenuLink" role="button" aria-haspopup="true" aria-expanded="false">
                Personal Insurance
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="AutoInsurance.html">Auto Insurance</a>
                    <a class="dropdown-item" href="HomeInsurance.html">Home Insurance</a>
                    <a class="dropdown-item" href="Renters.html">Renters Insurance</a>
                    <a class="dropdown-item" href="Condo.html">Condo Insurance</a>
                    <a class="dropdown-item" href="LifeInsurance.html">Life Insurance</a>
                </div>
            </li>

             <div class='navCommercialLink justify-content-end ms-auto'> <ul class="navbar-nav">
                <li class="nav-item ">
                    <a class="nav-link float-end" href="CommercialInsurance.html">Commercial Insurance</a>
                </li>
            </ul>
        </div>
            <li class="nav-item dropdown">
                <a class="nav-link custom-dropdown-link" href="#" id="navbarDropdownMenuLink" role="button" aria-haspopup="true" aria-expanded="false">
                About Us
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="AboutUs.html">About Us</a>
                    <a class="dropdown-item" href="OurStaff.html">Our Staff</a>
                    <a class="dropdown-item" href="OurLocation.html">Our Location</a>
                    <a class="dropdown-item" href="CompaniesWeRepresent.html">Companies We Represent</a>
            </li>
        </ul>
       </div>
       </nav>
       `;
 }
});