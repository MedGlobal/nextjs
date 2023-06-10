// based on: https://davisgitonga.dev/blog/nextjs-google-analytics
import React from 'react'
import Script from 'next/script'

// Client-side cache, shared for the whole session of the user in the browser.
interface LuckyOrangeScriptProps {
  id: string;
}

const LuckyOrangeScript = ({
  id,
}: LuckyOrangeScriptProps) => (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://tools.luckyorange.com/core/lo.js?site-id=${id}`}
      />
      <Script
        id="lucky-orange-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.LOQ = window.LOQ || [];
          `,
        }}
      />
    </>
)

export default LuckyOrangeScript
