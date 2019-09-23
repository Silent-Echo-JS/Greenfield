const moment = require('moment');

module.exports = ({
  name, address, city, state, zipcode, thisYearRev, thisYearExp, lastYearRev, lastYearExp,
}) => {
  const today = new Date();
  return `
    <!doctype html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>PDF Result Template</title>
            <style>
                .invoice-box {
                max-width: 800px;
                margin: auto;
                padding: 30px;
                border: 1px solid #eee;
                box-shadow: 0 0 10px rgba(0, 0, 0, .15);
                font-size: 16px;
                line-height: 24px;
                font-family: 'Helvetica Neue', 'Helvetica',
                color: #555;
                }
                .margin-top {
                margin-top: 50px;
                }
                .justify-center {
                text-align: center;
                }
                .invoice-box table {
                width: 100%;
                line-height: inherit;
                text-align: left;
                }
                .invoice-box table td {
                padding: 5px;
                vertical-align: top;
                }
                .invoice-box table tr td:nth-child(2) {
                text-align: right;
                }
                .invoice-box table tr.top table td {
                padding-bottom: 20px;
                }
                .invoice-box table tr.top table td.title {
                font-size: 45px;
                line-height: 45px;
                color: #333;
                }
                .invoice-box table tr.information table td {
                padding-bottom: 40px;
                }
                .invoice-box table tr.heading td {
                background: #eee;
                border-bottom: 1px solid #ddd;
                font-weight: bold;
                }
                .invoice-box table tr.details td {
                padding-bottom: 20px;
                }
                .invoice-box table tr.item td {
                border-bottom: 1px solid #eee;
                }
                .invoice-box table tr.item.last td {
                border-bottom: none;
                }
                .invoice-box table tr.total td:nth-child(2) {
                border-top: 2px solid #eee;
                font-weight: bold;
                }
                @media only screen and (max-width: 600px) {
                .invoice-box table tr.top table td {
                width: 100%;
                display: block;
                text-align: center;
                }
                .invoice-box table tr.information table td {
                width: 100%;
                display: block;
                text-align: center;
                }
                }
                .tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
                .tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
                .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}
                .tg .tg-ts09{background-color:#cccccc;border-color:#cccccc;text-align:left;vertical-align:top}
                .tg .tg-1wig{font-weight:bold;text-align:center;vertical-align:top}
                .tg .tg-k1gt{font-weight:bold;font-size:13px;background-color:#efefef;text-align:left;vertical-align:top}
                .tg .tg-4n5g{background-color:#cccccc;text-align:left;vertical-align:top}
                .tg .tg-yla0{font-weight:bold;text-align:left;vertical-align:middle}
                .tg .tg-0lax{text-align:left;vertical-align:top}
                .tg .tg-b3sw{font-weight:bold;background-color:#efefef;text-align:left;vertical-align:top}
            </style>
        </head>
        <body>
            <div className="DocumentGenerator">
                <style type="text/css">
                    .invoice-box {
                        max - width: 800px;
                    margin: auto;
                    padding: 30px;
                    border: 1px solid #eee;
                    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
                    font-size: 16px;
                    line-height: 24px;
                    font-family: 'Helvetica Neue', 'Helvetica',
                    color: #555;
                    }
                .margin-top {
                        margin - top: 50px;
                    }
                .justify-center {
                        text - align: center;
                    }
                .invoice-box table {
                        width: 100%;
                    line-height: inherit;
                    text-align: left;
                    }
                .invoice-box table td {
                        padding: 5px;
                    vertical-align: top;
                    }
                .invoice-box table tr td:nth-child(2) {
                        text - align: right;
                    }
                .invoice-box table tr.top table td {
                        padding - bottom: 20px;
                    }
                .invoice-box table tr.top table td.title {
                        font - size: 45px;
                    line-height: 45px;
                    color: #333;
                    }
                .invoice-box table tr.information table td {
                        padding - bottom: 40px;
                    }
                .invoice-box table tr.heading td {
                        background: #eee;
                    border-bottom: 1px solid #ddd;
                    font-weight: bold;
                    }
                .invoice-box table tr.details td {
                        padding - bottom: 20px;
                    }
                .invoice-box table tr.item td {
                        border - bottom: 1px solid #eee;
                    }
                .invoice-box table tr.item.last td {
                        border - bottom: none;
                    }
                .invoice-box table tr.total td:nth-child(2) {
                        border - top: 2px solid #eee;
                    font-weight: bold;
                    }
                @media only screen and (max-width: 600px) {
                .invoice - box table tr.top table td {
                        width: 100%;
                    display: block;
                    text-align: center;
                    }
                .invoice-box table tr.information table td {
                        width: 100%;
                    display: block;
                    text-align: center;
                    }
                    }
                    .tg  {border - collapse:collapse;border-spacing:0;border-color:#ccc;}
                    .tg td{font - family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
                    .tg th{font - family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}
                    .tg .tg-ts09{background - color:#cccccc;border-color:#cccccc;text-align:left;vertical-align:top}
                    .tg .tg-1wig{font - weight:bold;text-align:left;vertical-align:top}
                    .tg .tg-k1gt{font - weight:bold;font-size:13px;background-color:#efefef;text-align:left;vertical-align:top}
                    .tg .tg-4n5g{background - color:#cccccc;text-align:left;vertical-align:top}
                    .tg .tg-yla0{font - weight:bold;text-align:left;vertical-align:middle}
                    .tg .tg-0lax{text - align:left;vertical-align:top}
                    .tg .tg-b3sw{font - weight:bold;background-color:#efefef;text-align:left;vertical-align:top}
                </style>
                <div class="invoice-box">
                    <table cellpadding="0" cellspacing="0">
                        <tr class="top">
                            <td colspan="2">
                            </td>
                        </tr>
                        <tr class="information">
                            <td colspan="2">
                                <table>
                                    <tr>
                                        <td>
                                            ${name}
                                            ${address}
                                            ${`${city}, ${state}   ${zipcode}`}
                                        </td>
                                        <td>
                                            Date: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                <table class="tg">
                    <tr>
                        <th class="tg-yla0">INCOME</th>
                                <th class="tg-1wig">${moment().year()}</th>
                                <th class="tg-1wig">${moment().subtract(1, 'years').year()}</th>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">JAN</td>
                                <td class="tg-0lax">${thisYearRev['0']}</td>
                                <td class="tg-0lax">${lastYearRev['0']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">FEB</td>
                                <td class="tg-0lax">${thisYearRev['1']}</td>
                                <td class="tg-0lax">${lastYearRev['1']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">MAR</td>
                                <td class="tg-0lax">${thisYearRev['2']}</td>
                                <td class="tg-0lax">${lastYearRev['2']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">APR</td>
                                <td class="tg-0lax">${thisYearRev['3']}</td>
                                <td class="tg-0lax">${lastYearRev['3']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">MAY</td>
                                <td class="tg-0lax">${thisYearRev['4']}</td>
                                <td class="tg-0lax">${lastYearRev['4']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">JUN</td>
                                <td class="tg-0lax">${thisYearRev['5']}</td>
                                <td class="tg-0lax">${lastYearRev['5']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">JUL</td>
                                <td class="tg-0lax">${thisYearRev['6']}</td>
                                <td class="tg-0lax">${lastYearRev['6']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">AUG</td>
                                <td class="tg-0lax">${thisYearRev['7']}</td>
                                <td class="tg-0lax">${lastYearRev['7']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">SEP</td>
                                <td class="tg-0lax">${thisYearRev['8']}</td>
                                <td class="tg-0lax">${lastYearRev['8']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">OCT</td>
                                <td class="tg-0lax">${thisYearRev['9']}</td>
                                <td class="tg-0lax">${lastYearRev['9']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">NOV</td>
                                <td class="tg-0lax">${thisYearRev['10']}</td>
                                <td class="tg-0lax">${lastYearRev['10']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">DEC</td>
                                <td class="tg-0lax">${thisYearRev['11']}</td>
                                <td class="tg-0lax">${lastYearRev['11']}</td>
                    </tr>
                    <tr>
                        <td class="tg-b3sw">TOTAL YTD</td>
                                <td class="tg-0lax">${thisYearRev.totalTD}</td>
                                <td class="tg-0lax">${lastYearRev.totalTD}</td>
                    </tr>
                    <tr>
                        <td class="tg-4n5g"></td>
                                <td class="tg-4n5g"></td>
                                <td class="tg-4n5g"></td>
                    </tr>
                    <tr>
                        <td class="tg-b3sw">EXPENSE</td>
                                <td class="tg-1wig">${moment().year()}</td>
                                <td class="tg-1wig">${moment().subtract(1, 'years').year()}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">JAN</td>
                                <td class="tg-0lax">${thisYearExp['0']}</td>
                                <td class="tg-0lax">${lastYearExp['0']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">FEB</td>
                                <td class="tg-0lax">${thisYearExp['1']}</td>
                                <td class="tg-0lax">${lastYearExp['1']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">MAR</td>
                                <td class="tg-0lax">${thisYearExp['2']}</td>
                                <td class="tg-0lax">${lastYearExp['2']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">APR</td>
                                <td class="tg-0lax">${thisYearExp['3']}</td>
                                <td class="tg-0lax">${lastYearExp['3']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">MAY</td>
                                <td class="tg-0lax">${thisYearExp['4']}</td>
                                <td class="tg-0lax">${lastYearExp['4']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">JUN</td>
                                <td class="tg-0lax">${thisYearExp['5']}</td>
                                <td class="tg-0lax">${lastYearExp['5']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">JUL</td>
                                <td class="tg-0lax">${thisYearExp['6']}</td>
                                <td class="tg-0lax">${lastYearExp['6']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">AUG</td>
                                <td class="tg-0lax">${thisYearExp['7']}</td>
                                <td class="tg-0lax">${lastYearExp['7']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">SEP</td>
                                <td class="tg-0lax">${thisYearExp['8']}</td>
                                <td class="tg-0lax">${lastYearExp['8']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">OCT</td>
                                <td class="tg-0lax">${thisYearExp['9']}</td>
                                <td class="tg-0lax">${lastYearExp['9']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">NOV</td>
                                <td class="tg-0lax">${thisYearExp['10']}</td>
                                <td class="tg-0lax">${lastYearExp['10']}</td>
                    </tr>
                    <tr>
                        <td class="tg-k1gt">DEC</td>
                                <td class="tg-0lax">${thisYearExp['11']}</td>
                                <td class="tg-0lax">${lastYearExp['11']}</td>
                    </tr>
                    <tr>
                        <td class="tg-b3sw">TOTAL YTD</td>
                                <td class="tg-0lax">${thisYearExp.totalTD}</td>
                                <td class="tg-0lax">${lastYearExp.totalTD}</td>
                    </tr>
                    <tr>
                        <td class="tg-ts09"></td>
                                <td class="tg-ts09"></td>
                                <td class="tg-ts09"></td>
                    </tr>
                    <tr>
                        <td class="tg-b3sw">TOTAL INCOME</td>
                                <td class="tg-0lax">${thisYearRev.totalTD}</td>
                                <td class="tg-0lax">${lastYearRev.totalTD}</td>
                    </tr>
                    <tr>
                        <td class="tg-b3sw">TOTAL EXPENSE</td>
                                <td class="tg-0lax">( ${thisYearExp.totalTD} )</td>
                                <td class="tg-0lax">( ${lastYearExp.totalTD} )</td>
                    </tr>
                    <tr>
                        <td class="tg-b3sw">RETAINED EARNINGS</td>
                                <td class="tg-0lax">${lastYearExp.totalTD - lastYearExp.totalTD}</td>
                                <td class="tg-0lax">---</td>
                    </tr>
                    <tr>
                        <td class="tg-b3sw">TOTAL YTD</td>
                                <td class="tg-0lax">${thisYearRev.totalTD - thisYearExp.totalTD + (lastYearRev.totalTD - lastYearExp.totalTD)}</td>
                                <td class="tg-0lax">${lastYearRev.totalTD - lastYearExp.totalTD}</td>
                    </tr>
                </table>
                </table>
            </div>
            </div>
        </body>
    </html>
    `;
};
