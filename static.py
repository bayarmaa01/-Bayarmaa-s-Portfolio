from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time

# Start the WebDriver and open the HTML page
service = Service(executable_path='/usr/local/bin/chromedriver')
options = webdriver.ChromeOptions()
options.add_argument("--headless")
options.add_argument('--no-sandbox')
driver = webdriver.Chrome(service=service, options=options)
driver.get("https://github.com/bayarmaa01/coffeeshop/")  # Update this with the path to your HTML file

time.sleep(2)  # Adding a delay to see the result

# Assert presence of an element related to Brew Haven Coffee
brew_haven_element = driver.find_element_by_xpath("//h1[contains(text(), 'Brew Haven Coffee')]")
assert brew_haven_element is not None, "Brew Haven Coffee element not found on the page"

# Take a screenshot
timestamp = time.strftime("%Y%m%d-%H%M%S")
screenshot_file = f"screenshot_{timestamp}.png"
driver.save_screenshot(screenshot_file)

# Close the WebDriver
driver.close()

