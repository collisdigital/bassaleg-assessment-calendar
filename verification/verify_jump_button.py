from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Emulate a desktop viewport
        page = browser.new_page(viewport={"width": 1280, "height": 800})

        try:
            # Go to the local dev server
            page.goto("http://localhost:4173")

            # Wait for content to load
            expect(page.get_by_role("heading", name="Assessment Calendar")).to_be_visible()

            # Locate the Jump to Today button
            # We used aria-label="Jump to Today"
            today_btn = page.get_by_label("Jump to Today")
            expect(today_btn).to_be_visible()

            # Take a screenshot of the header area
            page.screenshot(path="verification/jump_to_today_button.png", clip={"x": 0, "y": 0, "width": 1280, "height": 100})
            print("Screenshot taken.")

            # Test functionality?
            # Scrolling is hard to visualize in a static screenshot, but we can verify the button is clickable.
            today_btn.click()

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
