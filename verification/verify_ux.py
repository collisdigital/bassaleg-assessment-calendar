from playwright.sync_api import Page, expect, sync_playwright

def verify_filter_toggle(page: Page):
    # Set viewport to desktop to ensure FilterBar is visible
    page.set_viewport_size({"width": 1280, "height": 720})

    # 1. Arrange: Go to the app
    page.goto("http://localhost:5173")

    # 2. Act: Find a filter button
    # Wait for the "Filter by Subject" text to be visible, which is in the FilterBar
    page.wait_for_selector("text=Filter by Subject", state="visible")

    # Find the "Maths" button (assuming it exists in data) or just the first button in that section.
    # We can search for a button inside the FilterBar.
    # The FilterBar has a specific structure.

    # Let's just find a button that is likely a filter.
    # Subject filters are typically "Maths", "English", etc.
    # Let's try to get the first button that has `aria-pressed` attribute, if my change worked.
    # Or just get a button by text if we know the data.
    # Since I don't know the exact data, I will use the structure.

    # Locate the container for subjects
    subject_section = page.locator("text=Filter by Subject").locator("..")

    # Get the first button in the subject filter area.
    first_filter_btn = subject_section.locator("button").first

    # Wait for it to be visible
    first_filter_btn.wait_for(state="visible")

    # Get the button text to log it
    btn_text = first_filter_btn.text_content()
    print(f"Testing filter button: {btn_text}")

    # 3. Assert Initial State
    # Check if aria-pressed is present
    initial_pressed = first_filter_btn.get_attribute("aria-pressed")
    print(f"Initial aria-pressed: {initial_pressed}")

    # It should be "false" (unselected) or "true" (selected).
    if initial_pressed is None:
        print("ERROR: aria-pressed attribute is missing!")

    # 4. Act: Click to toggle
    first_filter_btn.click()

    # 5. Assert New State
    # It should now be the opposite.
    expected_pressed = "true" if initial_pressed == "false" else "false"

    # Wait for the attribute to update
    expect(first_filter_btn).to_have_attribute("aria-pressed", expected_pressed)

    print(f"New aria-pressed: {first_filter_btn.get_attribute('aria-pressed')}")

    # 6. Screenshot
    page.screenshot(path="verification/filter_toggle.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_filter_toggle(page)
        finally:
            browser.close()
