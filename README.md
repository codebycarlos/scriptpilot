![Logo](<https://github.com/codebycarlos/scriptpilot/blob/master/public/assets/images/logos/ScriptPilot%20Logo%20Only%20(Black)%20Icon.png?raw=true>)

# ScriptPilot

A web platform powering serverless user-defined scripts.
ScriptPilot provides a simple, user-friendly platform for managing scripts
hosted in the cloud for various computing purposes. Scripts can be invoked
synchronously and asynchronously within the app or externally via encrypted
API keys. The app was designed exclusively for the use of
[IndigoZest](https://www.indigozest.co.uk/). This repo is a public
showcase for demo purposes.

# Contents  
- [How it works](#how-it-works)  
- [Demo](#demo)
- [Documentation](#documentation)
- [Screenshots](#screenshots)
  - [Desktop](#desktop)
  - [Mobile](#mobile)
- [Used by](#used-by)
- [Support](#support)
- [Authors](#authors)

## How It Works

At the core of ScriptPilot's backend, it utilises the
[AWS (Amazon Web Services) SDK](https://aws.amazon.com/sdk-for-javascript/)
to manage and execute code in a serverless manner with the use of the
[Lambda service](https://aws.amazon.com/lambda/).

ScriptPilot is able to randomly generate and encrypt API keys which
are stored in the
[MongoDB database](https://www.mongodb.com/cloud/atlas/lp/try2?utm_content=controlaterms&utm_source=google&utm_campaign=gs_emea_spain_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624563&gclid=CjwKCAjw2bmLBhBREiwAZ6ugozTCl-gUSGKUuTFBzKMrccru0ykgfh6R1aY_vLI37n80w6OmYc3eXRoCzl4QAvD_BwE)
– it is these that may be used by third-party applications to invoke and
interact with publicly exposed scripts via
[POST requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST).

Taking advantage of free service tiers ScriptPilot operates entirely
**cost-free** within the reasonably high usage levels of a single
small-sized organisation, such as [IndigoZest](https://www.indigozest.co.uk/).

**Client:** [React.js](https://reactjs.org/), [SCSS](https://sass-lang.com/), [Material UI](https://mui.com/)

**Server:** [Node.js](https://nodejs.org/en/), [Next.js](https://nextjs.org/), [AWS Lambda](https://aws.amazon.com/lambda/)

**Storage:** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_content=controlaterms&utm_source=google&utm_campaign=gs_emea_spain_search_core_brand_atlas_desktop&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624563&gclid=CjwKCAjw2bmLBhBREiwAZ6ugozTCl-gUSGKUuTFBzKMrccru0ykgfh6R1aY_vLI37n80w6OmYc3eXRoCzl4QAvD_BwE)

**Hosting:** [Heroku](https://www.heroku.com/home), [GoDaddy](https://uk.godaddy.com/)

## Demo

For security purposes, some functionality may be disabled (primarily, external invocation of scripts).
Users require either a LinkedIn account or an email to log in:

https://www.scriptpilot.codebycarlos.co.uk

## Documentation

-   [Manual](https://github.com/codebycarlos/scriptpilot/blob/master/documentation/ScriptPilot%20-%20Usage%20%26%20Maintenance%20Manual.pdf)

## Screenshots

### Desktop

![Login Page](https://github.com/codebycarlos/scriptpilot/blob/master/public/assets/images/screenshots/Login%20Page.png?raw=true)  
Login Page

![Scripts Page](https://github.com/codebycarlos/scriptpilot/blob/master/public/assets/images/screenshots/Scripts%20Page.png?raw=true)  
Scripts Page

![Script Details Page](https://github.com/codebycarlos/scriptpilot/blob/master/public/assets/images/screenshots/Script%20Details%20Page.png?raw=true)  
Scripts Details Page

![Script Invocation Panel](https://github.com/codebycarlos/scriptpilot/blob/master/public/assets/images/screenshots/Script%20Invocation%20Panel.png?raw=true)  
Script Invocation Panel

![New Script Page](https://github.com/codebycarlos/scriptpilot/blob/master/public/assets/images/screenshots/Add%20Script%20Page.png?raw=true)  
New Script Page

![Invoking a Script](https://github.com/codebycarlos/scriptpilot/blob/master/public/assets/gifs/Invoking%20a%20script.gif?raw=true)  
Invoking a Script

![Genering a Script's API key](https://github.com/codebycarlos/scriptpilot/blob/master/public/assets/gifs/Genering%20a%20script's%20API%20key.gif?raw=true)  
Genering a Script's API key

![Deleting a Script](https://github.com/codebycarlos/scriptpilot/blob/master/public/assets/gifs/Deleting%20a%20script.gif?raw=true)  
Deleting a Script

### Mobile

![Login Page](<https://github.com/codebycarlos/scriptpilot/blob/master/public/assets/images/screenshots/Login%20Page%20(Mobile).png?raw=true>)  
Login Page

![Scripts Page](<https://github.com/codebycarlos/scriptpilot/blob/master/public/assets/images/screenshots/Scripts%20Page%20(Mobile).png?raw=true>)  
Scripts Page

![Script Details Page](<https://github.com/codebycarlos/scriptpilot/blob/master/public/assets/images/screenshots/Script%20Details%20Page%20(Mobile).png?raw=true>)  
Script Details Page

![Script Invocation Panel](<https://github.com/codebycarlos/scriptpilot/blob/master/public/assets/images/screenshots/Script%20Invocation%20Panel%20(Mobile).png?raw=true>)  
Script Invocation Panel

## Used By

-   [IndigoZest](https://www.indigozest.co.uk/)

## Support

For support and to report issues, email hello@codebycarlos.co.uk.

## Authors

-   [@codebycarlos](https://github.com/codebycarlos)
