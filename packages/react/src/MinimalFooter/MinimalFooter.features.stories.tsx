import React from 'react'
import {ComponentMeta} from '@storybook/react'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import {MinimalFooter} from '.'
import {InlineLink, Text, ThemeProvider} from '..'

export default {
  title: 'Components/MinimalFooter/Features',
  component: MinimalFooter,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
} as ComponentMeta<typeof MinimalFooter>

export const MultipleFootnotes = () => (
  <MinimalFooter socialLinks={false}>
    <MinimalFooter.Footnotes>
      <Text>
        <sup>1</sup>By signing up, GitHub may use your information to personalize and measure the effectiveness of
        enterprise business ads, including those you see off of GitHub, promotional communications or marketing you
        receive related to the Enterprise Marketing Pages. We will send you relevant emails and promotional information
        based on your GitHub profile and any additional information provided in the sign-up form. If you change your
        mind, you can unsubscribe at any time (an unsubscribe link is provided in every email). For more information on
        how GitHub uses your personal information, please see the GitHub Privacy Statement.
      </Text>
      <Text>
        <sup>2</sup>By signing up, GitHub may use your information to personalize and measure the effectiveness of
        enterprise business ads, including those you see off of GitHub, promotional communications or marketing you
        receive related to the Enterprise Marketing Pages. We will send you relevant emails and promotional information
        based on your GitHub profile and any additional information provided in the sign-up form. If you change your
        mind, you can unsubscribe at any time (an unsubscribe link is provided in every email). For more information on
        how GitHub uses your personal information, please see the{' '}
        <InlineLink
          href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
          target="_blank"
        >
          GitHub Privacy Statement
        </InlineLink>
        .
      </Text>
    </MinimalFooter.Footnotes>
    <MinimalFooter.Link href="https://github.com/organizations/enterprise_plan">Try GitHub for free</MinimalFooter.Link>
    <MinimalFooter.Link href="https://github.com/enterprise">Enterprise</MinimalFooter.Link>
    <MinimalFooter.Link href="https://github.com/enterprise/contact">Email us</MinimalFooter.Link>
  </MinimalFooter>
)

export const MaximumLinks = () => (
  <MinimalFooter socialLinks={false}>
    <MinimalFooter.Link href="#">Link one</MinimalFooter.Link>
    <MinimalFooter.Link href="#">Link two</MinimalFooter.Link>
    <MinimalFooter.Link href="#">Link three</MinimalFooter.Link>
    <MinimalFooter.Link href="#">Link four</MinimalFooter.Link>
    <MinimalFooter.Link href="#">Link five</MinimalFooter.Link>
    <MinimalFooter.Link href="#">Link six</MinimalFooter.Link>
    <MinimalFooter.Link href="#">Link seven</MinimalFooter.Link>
  </MinimalFooter>
)
MaximumLinks.storyName = 'Maximum Links (5)'

export const NoSocialLinks = () => <MinimalFooter socialLinks={false} />

export const FilteredSocialLinks = () => <MinimalFooter socialLinks={['facebook', 'twitter']} />

export const DefaultNarrow = () => (
  <MinimalFooter>
    <MinimalFooter.Footnotes>
      <Text>
        <sup>1</sup>By signing up, GitHub may use your information to personalize and measure the effectiveness of
        enterprise business ads, including those you see off of GitHub, promotional communications or marketing you
        receive related to the Enterprise Marketing Pages. We will send you relevant emails and promotional information
        based on your GitHub profile and any additional information provided in the sign-up form. If you change your
        mind, you can unsubscribe at any time (an unsubscribe link is provided in every email). For more information on
        how GitHub uses your personal information, please see the{' '}
        <InlineLink
          href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
          target="_blank"
        >
          GitHub Privacy Statement
        </InlineLink>
        .
      </Text>
    </MinimalFooter.Footnotes>
    <MinimalFooter.Link href="https://github.com/organizations/enterprise_plan">Try GitHub for free</MinimalFooter.Link>
    <MinimalFooter.Link href="https://github.com/enterprise">Enterprise</MinimalFooter.Link>
    <MinimalFooter.Link href="https://github.com/enterprise/contact">Email us</MinimalFooter.Link>
  </MinimalFooter>
)
DefaultNarrow.parameters = {
  viewport: {
    defaultViewport: 'iphonexr'
  }
}
DefaultNarrow.storyName = 'Default (Narrow viewport)'

export const DarkTheme = () => (
  <ThemeProvider colorMode="dark">
    <MinimalFooter />
  </ThemeProvider>
)
