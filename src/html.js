import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.getElementsByTagName('head')[0].appendChild(function(s){
            var d=document,m2g=d.createElement('script'),l=function(){Mobi2Go.load(s.container,s.ready);},jq=window.jQuery&&+window.jQuery.fn.jquery.replace(/^(\d+).*$/,'$1')===1&&+window.jQuery.fn.jquery.replace(/^\d+\.(\d+).*$/,'$1')>=7,qs=window.location.search.substring(1),re='=(.*?)(?:;|$)',c=d.cookie.match('MOBI2GO_SESSIONID'+re),w=window.innerWidth;
            m2g.src='https://www.mobi2go.com/store/embed/1990-v8oL.js?'+qs+(jq?'&no_jquery':'')+(c?'&s='+c[1]:'')+'&device_width='+w;
            if(m2g.onload!==undefined)m2g.onload=l;else m2g.onreadystatechange=function(){if(m2g.readyState!=='loaded'&&m2g.readyState!=='complete')return;m2g.onreadystatechange=null;l();}
            window.Mobi2Go_est = +(new Date);
            return m2g;
        }({
            container: 'Mobi2Go-Storefront', // Replace with ID  of the element to inject UI into
            ready: function() {} // Callback to fire when app is ready
        })););
        `,
        }}
      />
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
