export const elementsPageLocators = {
  textBoxButton: "//span[normalize-space()='Text Box']",
  userNameInput: "//input[@id='userName']",
  userEmailInput: "//input[@id='userEmail']",
  currentAddressInput: "//textarea[@id='currentAddress']",
  permanentAddressInput: "//textarea[@id='permanentAddress']",
  submitButton: "//button[@id='submit']",
};

export const checkBoxLocators = {
  checkBoxButton: "//span[normalize-space()='Check Box']",
  expandAllButton: "//button[@title='Expand all']//*[name()='svg']//*[name()='path' and contains(@d,'M19 3H5c-1')]",
  veuCheckBox: "//label[@for='tree-node-veu']//span[@class='rct-checkbox']//*[name()='svg']",
};

export const radioButtonLocators = {
  radioButtonNav: "//span[normalize-space()='Radio Button']",
  yesRadioButton: "//label[normalize-space()='Yes']",
  confirmationText: "//p[1]",
};

export const webTableLocators = {
  webTableNav: "//span[normalize-space()='Web Tables']",
  searchInput: "//input[@id='searchBox']",
  foundName: "//div[normalize-space()='Kierra']",

  addButton: "//button[@id='addNewRecordButton']",
  firstNameInput: "//input[@id='firstName']",
  lastNameInput: "//input[@id='lastName']",
  emailInput: "//input[@id='userEmail']",
  ageInput: "//input[@id='age']",
  salaryInput: "//input[@id='salary']",
  departmentInput: "//input[@id='department']",
  submitButton: "//button[@id='submit']",
};

export const buttonPageLocators = {
  buttonsNav: "//span[normalize-space()='Buttons']",
  clickMeButton: "//button[normalize-space()='Click Me']",
  dynamicClickMessage: "//p[@id='dynamicClickMessage']",

  rightClickButton: "//button[normalize-space()='Right Click Me']",
  rightClickMessage: "//p[@id='rightClickMessage']",

  doubleClickButton: "//button[normalize-space()='Double Click Me']",
  doubleClickMessage: "//p[@id='doubleClickMessage']",
};

export const linksPageLocators = {
  linksNav: "//span[normalize-space()='Links']",
  simpleLink: "//a[@id='simpleLink']",
  dynamicLink: "//a[@id='dynamicLink']",
  toolsqaImage: "//img[@src='/images/Toolsqa.jpg']",
};

export const brokenLinksLocators = {
  elementsCard: "//h5[normalize-space()='Elements']",
  brokenLinksButton: "//span[normalize-space()='Broken Links - Images']",
  validImageText: "//p[normalize-space()='Valid image']",
  validImage: "//body/div/div/div/div/div/div/img[1]",
  brokenImageText: "//p[normalize-space()='Broken image']",
  brokenImage: "//img[2]"
};

export const uploadDownloadLocators = {
  elementsCard: "//h5[normalize-space()='Elements']",
  uploadDownloadButton: "//span[normalize-space()='Upload and Download']",
  downloadButton: "//a[@id='downloadButton']",
  uploadInput: "//input[@id='uploadFile']"
};

export const practiceFormLocators = {
  formsButton: "//h5[normalize-space()='Forms']",
  practiceFormButton: "//span[normalize-space()='Practice Form']",
  // formHeader: "//h1[normalize-space()='Practice Form']",
  firstName: "//input[@id='firstName']",
  lastName: "//input[@id='lastName']",
  email: "//input[@id='userEmail']",
  genderMale: "//label[normalize-space()='Male']",
  mobileNumber: "//input[@id='userNumber']",
  dateOfBirth: "//input[@id='dateOfBirthInput']",
  subjectsInput: "#subjectsInput",
  hobbiesSports: "//label[normalize-space()='Sports']",
  address: "//textarea[contains(@placeholder,'Current Address')]",
  stateDropdown: "//div[contains(text(),'Select State')]",
  stateOption: "//div[text()='NCR']",
  cityDropdown: "//div[@id='stateCity-wrapper']//div[contains(text(),'Select City')]",
  cityOption: "//div[text()='Delhi']",
  submitButton: "//button[@id='submit']",
  closeButton: "//button[@id='closeLargeModal']",
  modalDialog: '.modal-content'
};

export const alertsFramesLocators = {
  alertsFrameSection: "//h5[normalize-space()='Alerts, Frame & Windows']",
  browserWindowsButton: "//span[normalize-space()='Browser Windows']",

  newTabButton: "//button[@id='tabButton']",
  newWindowButton: "//button[@id='windowButton']",
  newWindowMessageButton: "//button[@id='messageWindowButton']",
};

export const alertsPageLocators = {
  alertsFrameSection: "//h5[normalize-space()='Alerts, Frame & Windows']",
  alertsButton: "//span[normalize-space()='Alerts']",
  triggerAlertButton: "//button[@id='alertButton']",
};

