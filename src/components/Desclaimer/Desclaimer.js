import React from 'react';

const Desclaimer = () => {
    return (
        <div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Legal Disclaimer
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        The prices specified herein are indicative and may not be final. The indicated price may differ due to purchase of any additional accessories, parts or products, services that may be availed by the customer, discounts offered, change in government taxes, duties, fees or levies, change of state of registration etc. Carvana Warecester or the Authorised Franchise Partner shall not be responsible or liable to compensate for the difference in the prices due to aforesaid reasons or any reason beyond the control of Carvana Warecester or the Authorised Franchise Partner. Actual colour of the vehicle may differ from those shown in pictures. While Carvana Warecester tries to make sure that all information provided herein is accurate, we shall not be responsible for typographical and other errors (e.g., data transmission) that may appear on the site. If the posted price (including finance and lease payments) for a vehicle is incorrect, Carvana Warecester will endeavor to provide you with the correct prices as soon as we become aware of the error. In the event a vehicle is priced incorrectly,Carvana Warecester shall have the right to refuse or cancel any orders placed for the vehicle presented with the incorrect price. In addition, vehicle prices are subject to change and all vehicles are subject to prior sale and may not be available when you are ready to purchase.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Desclaimer;






