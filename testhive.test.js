test("Home page", function() {
  var driver = createDriver("http://testhive.org",
                            "1024x768","chrome");
  checkLayout(driver, "homepage.gspec",["desktop"]);
  driver.quit();
});
