/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: SubdomainNavBar', () => {
  test('SubdomainNavBar / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-subdomainnavbar--playground&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('SubdomainNavBar / No Search', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-subdomainnavbar--no-search&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('SubdomainNavBar / Search Open', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-subdomainnavbar--search-open&viewMode=story')

    await page.waitForTimeout(5500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('SubdomainNavBar / Search Results Visible', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-subdomainnavbar--search-results-visible&viewMode=story'
    )

    await page.waitForTimeout(5500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('SubdomainNavBar / Overflow Menu Open', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-subdomainnavbar--overflow-menu-open&viewMode=story'
    )

    await page.waitForTimeout(5500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Mobile viewport test for Mobile View', () => {
    test.use({viewport: {width: 360, height: 800}})
    test('SubdomainNavBar / Mobile View', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=components-subdomainnavbar--mobile-view&viewMode=story'
      )

      await page.waitForTimeout(5500)
      expect(await page.screenshot()).toMatchSnapshot()
    })
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Mobile viewport test for Mobile Menu Open', () => {
    test.use({viewport: {width: 360, height: 800}})
    test('SubdomainNavBar / Mobile Menu Open', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=components-subdomainnavbar--mobile-menu-open&viewMode=story'
      )

      await page.waitForTimeout(5500)
      expect(await page.screenshot()).toMatchSnapshot()
    })
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Mobile viewport test for Mobile Search Results Visible', () => {
    test.use({viewport: {width: 360, height: 800}})
    test('SubdomainNavBar / Mobile Search Results Visible', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=components-subdomainnavbar--mobile-search-results-visible&viewMode=story'
      )

      await page.waitForTimeout(5500)
      expect(await page.screenshot()).toMatchSnapshot()
    })
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Mobile viewport test for Mobile No Links', () => {
    test.use({viewport: {width: 360, height: 800}})
    test('SubdomainNavBar / Mobile No Links', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=components-subdomainnavbar--mobile-no-links&viewMode=story'
      )

      await page.waitForTimeout(5500)
      expect(await page.screenshot()).toMatchSnapshot()
    })
  })
  test('SubdomainNavBar / No overflow menu (1 link)', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-subdomainnavbar--no-overflow&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('SubdomainNavBar / Longer Title', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-subdomainnavbar--longer-title&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('SubdomainNavBar / Full Width', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-subdomainnavbar--full-width&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('SubdomainNavBar / Conditional Rendering', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-subdomainnavbar--conditional-rendering&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })
})
