const addEmployeePO = {
    preferredName:'input[name="preferredName"]',
    firstName:'input[name="firstName"]',
    lastName:'input[name="lastName"]',
    dateOfBirth:'input[name="dateOfBirthFormatted"]',
    nationality:'.ember-power-select-placeholder',
    gender:'.ember-power-select-placeholder',
    mobile:'input[name="mobileNumber"]',
    workEmail:'input[name="workEmail"]',
    workPhone:'input[name="officeNumber"]',
    jobTitle:'input[name="position"]',
    hiringDate:'input[name="hiredAtFormatted"]',
    probationEndDate:'input[name="probationEndDateFormatted"]',
    countryOfResidence:'.ember-power-select-placeholder',
    residenceVisaLocation:'.ember-power-select-placeholder',
    tradeLicense:'.ember-power-select-placeholder',
    labourNum:'input[name="ministryOfLabourId"]',
    currentlyInsuredYes:'button:nth-child(1) > i',
    currentlyInsuredNo:'button:nth-child(2) > i',
    createEmployeeBtn:'div.col-sm-11.col-md-10.col-lg-8.mar-ver > div > div > button:nth-child(2)',
    createAndAddAnotherBtn:'div.col-sm-11.col-md-10.col-lg-8.mar-ver > div > div > button:nth-child(3)',
    cancelBtn:'a[href="/enterprise/dashboard/employees/list?status=active"]',
    selectForm:'form[role="form"]'
};

export default addEmployeePO