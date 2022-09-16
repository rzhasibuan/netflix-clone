import React from 'react';
import ListLinkFooter from "./ListLinkFooter";
import Bahasa from "./Bahasa";

function Footer({title, copyRight, data1, data2, data3, data4, bahasa,}) {
    return (
        <footer>
            <div className="container">
                <div className="footer-title">
                    <p>{title}</p>
                </div>
                <div className="footer-link">
                    <ListLinkFooter query={data1}/>
                    <ListLinkFooter query={data2}/>
                    <ListLinkFooter query={data3}/>
                    <ListLinkFooter query={data4}/>
                </div>
                <Bahasa data={bahasa} />
                <div className="copyright">
                    {copyRight}
                </div>
            </div>
        </footer>
    );
}

export default Footer;