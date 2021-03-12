import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem/QuestionItem';
import style from './Home.module.css';
import Sorting from './QuestionItem/Sorting';
import * as axios from "axios";

let Home = (props) => {
    // const [data, setData] = useState(props.data);
    const [done, setDone] = useState(false);
    
    //const [url, setUrl] = useState(`https://api.stackexchange.com/2.2/questions?pagesize=50&order=${props.sort.order}&sort=${props.sort.type}&site=stackoverflow`);
    let url = `https://api.stackexchange.com/2.2/questions?pagesize=50&order=${props.sortOrder}&sort=${props.sortType}&site=stackoverflow`;
    console.log('url ' + url);

    useEffect(() => {
        fetch(url)
        .then(result => result.json())
        .then(
            (result) => {
                console.log(result);
            props.setData(result.items);
            
        });
    }, []);

    let dataNew = [
        {"tags":["c#","powershell","runspace"],"owner":{"reputation":11,"user_id":15362849,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/ea77df60b3ac16633709c8b8caf68ab5?s=128&d=identicon&r=PG&f=1","display_name":"Steffen","link":"https://stackoverflow.com/users/15362849/steffen"},"is_answered":false,"view_count":12,"answer_count":1,"score":1,"last_activity_date":1615314780,"creation_date":1615313147,"question_id":66552403,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552403/c-powershell-in-runspace-how-can-i-get-format-list-to-work","title":"C# Powershell in Runspace - How can i get &quot;Format-List&quot; to work?"},
        {"tags":["apache-spark","pyspark","apache-hudi"],"owner":{"reputation":1,"user_id":11895155,"user_type":"registered","profile_image":"https://lh3.googleusercontent.com/-8q6zbe-ysRY/AAAAAAAAAAI/AAAAAAAAAKw/JVblNIJZGQY/photo.jpg?sz=128","display_name":"Ankit Singla","link":"https://stackoverflow.com/users/11895155/ankit-singla"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"last_activity_date":1615314775,"creation_date":1615314775,"question_id":66552781,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552781/spark-datasource-hudi-table-read-using-instant-time","title":"Spark Datasource Hudi table read using instant time"},
        {"tags":["angular","stripe-payments"],"owner":{"reputation":97,"user_id":11527407,"user_type":"registered","profile_image":"https://lh4.googleusercontent.com/-CBK_pvoDVc4/AAAAAAAAAAI/AAAAAAAAAJk/WduhPyW3D_8/photo.jpg?sz=128","display_name":"AMAR MAGAR","link":"https://stackoverflow.com/users/11527407/amar-magar"},"is_answered":false,"view_count":9,"answer_count":1,"score":0,"last_activity_date":1615314769,"creation_date":1615292192,"question_id":66546712,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66546712/how-to-call-another-function-from-stripe-handler-response-in-angular-8","title":"How to call another function from stripe handler response In Angular 8"},
        {"tags":["python","pandas","jupyter-notebook","regression","linearmodels"],"owner":{"reputation":103,"user_id":11363345,"user_type":"registered","profile_image":"https://lh6.googleusercontent.com/-9b0EG3L_fOc/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdHpUX1jN2Gys9FJarG5WHDDafWUA/mo/photo.jpg?sz=128","display_name":"CSBossmann","link":"https://stackoverflow.com/users/11363345/csbossmann"},"is_answered":false,"view_count":165,"answer_count":1,"score":0,"last_activity_date":1615314762,"creation_date":1607079303,"question_id":65142275,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/65142275/the-index-on-the-time-dimension-must-be-either-numeric-or-date-like-error","title":"The index on the time dimension must be either numeric or date-like error"},
        {"tags":["typescript","react-select"],"owner":{"reputation":399,"user_id":4147445,"user_type":"registered","profile_image":"https://i.stack.imgur.com/EQM8P.jpg?s=128&g=1","display_name":"peach","link":"https://stackoverflow.com/users/4147445/peach"},"is_answered":false,"view_count":4,"answer_count":1,"score":1,"last_activity_date":1615314761,"creation_date":1615303612,"question_id":66549816,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66549816/extract-custom-cssproperties-in-react-select-style","title":"Extract custom CSSProperties in react-select style"},
        {"tags":["xamarin","colors","navigation"],"owner":{"reputation":7043,"user_id":186820,"user_type":"registered","accept_rate":49,"profile_image":"https://www.gravatar.com/avatar/836b23aeaf0cdc2e3ced82c8dd692614?s=128&d=identicon&r=PG","display_name":"LittleFunny","link":"https://stackoverflow.com/users/186820/littlefunny"},"is_answered":false,"view_count":2426,"answer_count":1,"score":1,"last_activity_date":1615314759,"creation_date":1553550979,"question_id":55347000,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/55347000/xamarin-form-how-to-change-the-back-button-color","title":"Xamarin form: How to change the back button color"},
        {"tags":["php"],"owner":{"reputation":1,"user_id":15363122,"user_type":"registered","profile_image":"https://lh3.googleusercontent.com/a-/AOh14Gj9HTuHyKT_PcSBqORsGevUEqcEyDbWC9Iib8Y5=k-s128","display_name":"Nyemo Lekuona","link":"https://stackoverflow.com/users/15363122/nyemo-lekuona"},"is_answered":false,"view_count":4,"closed_date":1615314687,"answer_count":0,"score":0,"last_activity_date":1615314756,"creation_date":1615314613,"last_edit_date":1615314756,"question_id":66552743,"link":"https://stackoverflow.com/questions/66552743/notes-undefined-index-on-line-36-and-37-in-my-php","closed_reason":"Duplicate","title":"NOTES: Undefined Index: on line 36 and 37 in my PHP"},
        {"tags":["r","ggplot2","encoding"],"owner":{"reputation":11,"user_id":15361189,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/361c024697103e030285ac3df280604b?s=128&d=identicon&r=PG&f=1","display_name":"Nolwenn35","link":"https://stackoverflow.com/users/15361189/nolwenn35"},"is_answered":false,"view_count":18,"answer_count":0,"score":1,"last_activity_date":1615314755,"creation_date":1615296832,"last_edit_date":1615314755,"question_id":66547897,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66547897/plot-encoding-r","title":"Plot encoding R"},
        {"tags":["php","html","css"],"owner":{"reputation":1,"user_id":15363193,"user_type":"registered","profile_image":"https://lh3.googleusercontent.com/a-/AOh14GjCaTCGfVAznq6fBK7jQnDGrlw3wmZfy5Q3eMj-=k-s128","display_name":"Faruk &#199;elik","link":"https://stackoverflow.com/users/15363193/faruk-%c3%87elik"},"is_answered":false,"view_count":3,"answer_count":0,"score":0,"last_activity_date":1615314751,"creation_date":1615314751,"question_id":66552777,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552777/my-css-class-code-doesnt-work-in-external-php-file","title":"My css class code doesnt work in external php file"},
        {"tags":["javascript","reactjs"],"owner":{"reputation":1444,"user_id":3913746,"user_type":"registered","accept_rate":72,"profile_image":"https://www.gravatar.com/avatar/c2d9ec6f6da29d8e0b3b22fe37dec448?s=128&d=identicon&r=PG&f=1","display_name":"pocockn","link":"https://stackoverflow.com/users/3913746/pocockn"},"is_answered":false,"view_count":18,"answer_count":1,"score":0,"last_activity_date":1615314751,"creation_date":1615312269,"question_id":66552220,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552220/work-out-whether-custom-radio-component-is-checked-or-not","title":"Work out whether custom radio component is checked or not"},
        {"tags":["ggplot2","r-markdown","gridextra"],"owner":{"reputation":57,"user_id":11689123,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/3f296f2cfd26d6260f18b1c03f81f39a?s=128&d=identicon&r=PG&f=1","display_name":"JVGen","link":"https://stackoverflow.com/users/11689123/jvgen"},"is_answered":false,"view_count":3,"answer_count":0,"score":0,"last_activity_date":1615314749,"creation_date":1615314323,"last_edit_date":1615314749,"question_id":66552693,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552693/side-by-side-ggplots-within-rmarkdown-using-grid-arrange","title":"Side-By-Side ggplots within rMarkdown using grid.arrange()"},
        {"tags":["javascript","reactjs","promise","axios","svg-react-loader"],"owner":{"reputation":122,"user_id":5347102,"user_type":"registered","profile_image":"https://i.stack.imgur.com/EIHDP.png?s=128&g=1","display_name":"Boris Winter","link":"https://stackoverflow.com/users/5347102/boris-winter"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"last_activity_date":1615314749,"creation_date":1615314749,"question_id":66552775,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552775/using-two-loaders-promises-on-same-page-react","title":"Using two Loaders &amp; Promises on same page - React"},{"tags":["ios","swift","closures"],"owner":{"reputation":334,"user_id":14414215,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/5d453b22cc23e4bcd93e42c43e4fbb61?s=128&d=identicon&r=PG&f=1","display_name":"myjunk","link":"https://stackoverflow.com/users/14414215/myjunk"},"is_answered":false,"view_count":26,"answer_count":1,"score":-1,"last_activity_date":1615314746,"creation_date":1615304536,"last_edit_date":1615314746,"question_id":66550072,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66550072/difference-between-return-of-any-vs-void-in-async-block","title":"Difference between return of Any vs Void in Async Block"},
        {"tags":["ajax","flask"],"owner":{"reputation":49,"user_id":12845199,"user_type":"registered","profile_image":"https://i.stack.imgur.com/tCOrc.jpg?s=128&g=1","display_name":"INGl0R1AM0R1","link":"https://stackoverflow.com/users/12845199/ingl0r1am0r1"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"last_activity_date":1615314744,"creation_date":1615314744,"question_id":66552774,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552774/can-i-request-the-data-of-a-form-before-it-being-submited-flask","title":"Can i request the data of a form before it being submited? Flask"},{"tags":["python","read-eval-print-loop"],"owner":{"reputation":1,"user_id":15363249,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/7cb1d15c519e2da867840cd85964a49f?s=128&d=identicon&r=PG&f=1","display_name":"jfuntimes123","link":"https://stackoverflow.com/users/15363249/jfuntimes123"},"is_answered":false,"view_count":4,"answer_count":0,"score":0,"last_activity_date":1615314742,"creation_date":1615314742,"question_id":66552773,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552773/i-need-to-make-a-menu-that-does-thisi-have-made-the-menu-but-im-not-sure-how-to","title":"i need to make a menu that does thisi have made the menu but I&#39;m not sure how to get it to go into the code of the one it picks"},{"tags":["apache","mod-rewrite"],"owner":{"reputation":14547,"user_id":654789,"user_type":"registered","accept_rate":89,"profile_image":"https://www.gravatar.com/avatar/44ca44bc65f36895abb2ad8f577139e7?s=128&d=identicon&r=PG","display_name":"puk","link":"https://stackoverflow.com/users/654789/puk"},"is_answered":true,"view_count":197859,"accepted_answer_id":9632952,"answer_count":5,"score":183,"last_activity_date":1615314741,"creation_date":1331290482,"last_edit_date":1615314741,"question_id":9632852,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/9632852/how-to-debug-apache-mod-rewrite","title":"How to debug Apache mod_rewrite"},{"tags":["python","python-3.x","selenium"],"owner":{"reputation":83,"user_id":12352926,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/42d68d0c9b8979a429f6ddd51558909e?s=128&d=identicon&r=PG&f=1","display_name":"Mohammad Kamrul Hasan","link":"https://stackoverflow.com/users/12352926/mohammad-kamrul-hasan"},"is_answered":true,"view_count":366,"answer_count":2,"score":0,"last_activity_date":1615314737,"creation_date":1593114464,"last_edit_date":1593144504,"question_id":62583223,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/62583223/python-selenium-common-exceptions-webdriverexception-message-unknown-error","title":"python-selenium.common.exceptions.WebDriverException: Message: Unknown error"},{"tags":["wpf","listview",".net-5","winui-3"],"owner":{"reputation":231,"user_id":6067603,"user_type":"registered","accept_rate":71,"profile_image":"https://www.gravatar.com/avatar/8231564f7bd5301ecd61ea54a5e51999?s=128&d=identicon&r=PG&f=1","display_name":"On The Net Again","link":"https://stackoverflow.com/users/6067603/on-the-net-again"},"is_answered":false,"view_count":32,"bounty_amount":50,"bounty_closes_date":1615919535,"answer_count":0,"score":0,"last_activity_date":1615314735,"creation_date":1614627189,"last_edit_date":1614790040,"question_id":66428479,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66428479/why-is-this-drag-n-drop-between-listviews-failing","title":"Why is this drag n drop between listviews failing?"},
        {"tags":["python","discord","discord.py","bots","blackjack"],"owner":{"reputation":1,"user_id":15356580,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/c5e0fa195abdaeec56f6b25476e3f785?s=128&d=identicon&r=PG&f=1","display_name":"user15356580","link":"https://stackoverflow.com/users/15356580/user15356580"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"last_activity_date":1615314734,"creation_date":1615314734,"question_id":66552771,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552771/non-iterable-value-self-hand-is-used-in-an-iterating-context","title":"Non-iterable value self.hand is used in an iterating context"},
        {"tags":["angular","redirect","keyboard-shortcuts","keyboard-events","keydown"],"owner":{"reputation":5,"user_id":12150702,"user_type":"registered","profile_image":"https://lh5.googleusercontent.com/-h3obDndqh_8/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3re8odj_LE52aqP7kWTgegLkUT2mTA/photo.jpg?sz=128","display_name":"Shawksta","link":"https://stackoverflow.com/users/12150702/shawksta"},"is_answered":false,"view_count":15,"answer_count":0,"score":0,"last_activity_date":1615314734,"creation_date":1615308749,"last_edit_date":1615314734,"question_id":66551323,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66551323/more-combinations-for-angular-keyboard-shortcuts","title":"More combinations for Angular Keyboard Shortcuts?"},{"tags":["html","node.js","http","websocket","socket.io"],"owner":{"reputation":13,"user_id":9486998,"user_type":"registered","profile_image":"https://lh3.googleusercontent.com/-KvD4kpKdPts/AAAAAAAAAAI/AAAAAAAAAII/ZEBTcfV5UpY/photo.jpg?sz=128","display_name":"Philipp","link":"https://stackoverflow.com/users/9486998/philipp"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"last_activity_date":1615314733,"creation_date":1615314733,"question_id":66552770,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552770/socket-io-400-bad-request-on-web-page","title":"Socket IO 400 Bad request on web-page"},{"tags":["sql","view"],"owner":{"reputation":103,"user_id":13342723,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/bb7a726564b1c3dc5ab64ed4e02fc499?s=128&d=identicon&r=PG&f=1","display_name":"abdcg","link":"https://stackoverflow.com/users/13342723/abdcg"},"is_answered":true,"view_count":31,"answer_count":1,"score":0,"last_activity_date":1615314728,"creation_date":1615262422,"last_edit_date":1615314728,"question_id":66540624,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66540624/how-to-select-max-value-from-a-nested-query","title":"How to Select Max Value From a Nested Query"},{"tags":["arduino","arduino-c++"],"owner":{"reputation":1,"user_id":15361951,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/a1e3f869cb256969e8758aaf892aaf34?s=128&d=identicon&r=PG&f=1","display_name":"MinimalEffort","link":"https://stackoverflow.com/users/15361951/minimaleffort"},"is_answered":false,"view_count":9,"answer_count":1,"score":0,"last_activity_date":1615314727,"creation_date":1615305835,"question_id":66550460,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66550460/repeating-an-if-command-within-an-if-command","title":"Repeating an If command within an If command"},{"tags":["python-3.x"],"owner":{"reputation":3084,"user_id":3045351,"user_type":"registered","accept_rate":59,"profile_image":"https://i.stack.imgur.com/QvwUz.jpg?s=128&g=1","display_name":"gdogg371","link":"https://stackoverflow.com/users/3045351/gdogg371"},"is_answered":false,"view_count":3,"answer_count":0,"score":0,"last_activity_date":1615314726,"creation_date":1615314726,"question_id":66552769,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552769/python-3-getting-key-error-from-list-of-dicts","title":"Python 3 - Getting key error from list of dicts"},{"tags":["java"],"owner":{"reputation":1,"user_id":15363173,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/8a89a97d042e67fd3d83782741e4c924?s=128&d=identicon&r=PG&f=1","display_name":"Mirowa","link":"https://stackoverflow.com/users/15363173/mirowa"},"is_answered":false,"view_count":3,"answer_count":0,"score":0,"last_activity_date":1615314726,"creation_date":1615314726,"question_id":66552768,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552768/why-is-my-filereader-not-outputting-codes-from-the-txt-file","title":"Why is my FileReader not outputting codes from the .txt file?"},
        {"tags":["html","css"],"owner":{"reputation":19,"user_id":14961796,"user_type":"registered","profile_image":"https://lh4.googleusercontent.com/-GKl0m2kbMjQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm9dyGJQhCAeASzvXPuo3EUcSC8gw/s96-c/photo.jpg?sz=128","display_name":"pat","link":"https://stackoverflow.com/users/14961796/pat"},"is_answered":false,"view_count":47,"answer_count":3,"score":0,"last_activity_date":1615314724,"creation_date":1613761774,"last_edit_date":1613762779,"question_id":66283646,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66283646/how-do-i-position-text-below-image","title":"How do i position text below image"},{"tags":["c"],"owner":{"reputation":1,"user_id":15362772,"user_type":"registered","profile_image":"https://lh5.googleusercontent.com/-FXQUUrcil-M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmPK07R5Je1NAtNrH9Xreq5ABPmFw/s96-c/photo.jpg?sz=128","display_name":"saba saber","link":"https://stackoverflow.com/users/15362772/saba-saber"},"is_answered":false,"view_count":32,"answer_count":1,"score":0,"last_activity_date":1615314717,"creation_date":1615310407,"last_edit_date":1615314717,"question_id":66551763,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66551763/how-to-check-whether-a-number-is-repeated-in-a-matrix-using-c-language","title":"How to check whether a number is repeated in a matrix using C language?"},{"tags":["javascript","html","jquery","css"],"owner":{"reputation":33,"user_id":10448387,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/34f3f9ab55384bc6698fe1cb402206c5?s=128&d=identicon&r=PG&f=1","display_name":"bruno2000","link":"https://stackoverflow.com/users/10448387/bruno2000"},"is_answered":false,"view_count":9,"answer_count":0,"score":0,"last_activity_date":1615314705,"creation_date":1615314602,"last_edit_date":1615314705,"question_id":66552741,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552741/javascript-dont-work-after-toggle-tab-in-bootstrap","title":"Javascript dont work after toggle tab in bootstrap"},{"tags":["python"],"owner":{"reputation":1,"user_id":15207728,"user_type":"registered","profile_image":"https://i.stack.imgur.com/Fyllb.jpg?s=128&g=1","display_name":"iUseVbsLmao","link":"https://stackoverflow.com/users/15207728/iusevbslmao"},"is_answered":false,"view_count":19,"answer_count":2,"score":-3,"last_activity_date":1615314703,"creation_date":1615314325,"last_edit_date":1615314447,"question_id":66552694,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552694/im-trying-to-make-a-password-generator-but-i-get-the-error-error-type-obje","title":"I&#39;m trying to make a password generator, but I get the error &quot;Error: &#39;type&#39; object cannot be interpreted as an integer&quot;"},{"tags":["batch-file","math"],"owner":{"reputation":23,"user_id":11379481,"user_type":"registered","profile_image":"https://lh3.googleusercontent.com/-9kYlGgT9uXQ/AAAAAAAAAAI/AAAAAAAAAME/fxbzr0s0dtY/photo.jpg?sz=128","display_name":"Matthew Letourneau","link":"https://stackoverflow.com/users/11379481/matthew-letourneau"},"is_answered":false,"view_count":3,"answer_count":0,"score":0,"last_activity_date":1615314701,"creation_date":1615314701,"question_id":66552765,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552765/math-in-batch-files","title":"Math in batch files"},{"tags":["gitlab","gitlab-ci","gitlab-ci-runner"],"owner":{"reputation":1,"user_id":11066001,"user_type":"registered","profile_image":"https://lh5.googleusercontent.com/-OlzZRNFuvfk/AAAAAAAAAAI/AAAAAAAAADA/q_qFxM8NOSg/photo.jpg?sz=128","display_name":"Yashika Chandra","link":"https://stackoverflow.com/users/11066001/yashika-chandra"},"is_answered":false,"view_count":9,"answer_count":0,"score":0,"last_activity_date":1615314696,"creation_date":1615293186,"last_edit_date":1615314696,"question_id":66546957,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66546957/how-to-use-gitlab-shared-runner-for-ios-projects","title":"How to use Gitlab shared runner for iOS projects"},
        {"tags":["geojson"],"owner":{"reputation":1,"user_id":15363195,"user_type":"registered","profile_image":"https://lh5.googleusercontent.com/-h5NnfwkmSAg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmznTiMlOshkEArGyX1Ie9qafeOhg/s96-c/photo.jpg?sz=128","display_name":"mhamdi mariem","link":"https://stackoverflow.com/users/15363195/mhamdi-mariem"},"is_answered":false,"view_count":3,"answer_count":0,"score":0,"last_activity_date":1615314695,"creation_date":1615314695,"question_id":66552764,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552764/extraction-fichier-geojson-%c3%a0-partir-dun-rectangle-dessin%c3%a9-sur-map-leaflet","title":"Extraction fichier GeoJson &#224; partir d&#39;un rectangle dessin&#233; sur MAP Leaflet"},{"tags":["java","oop"],"owner":{"reputation":1,"user_id":15144877,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/56fb67bf8e439e81a585e0eaed72f8d2?s=128&d=identicon&r=PG&f=1","display_name":"a_mathgeek_w","link":"https://stackoverflow.com/users/15144877/a-mathgeek-w"},"is_answered":false,"view_count":15,"answer_count":0,"score":-2,"last_activity_date":1615314695,"creation_date":1615313074,"last_edit_date":1615314695,"question_id":66552379,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552379/java-implementing-visitor-design-patter-in-current-code","title":"Java Implementing Visitor Design Patter in current code"},{"tags":["excel"],"owner":{"reputation":5,"user_id":15356280,"user_type":"registered","profile_image":"https://lh4.googleusercontent.com/-7qE5-RZ1-yI/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucn5sJ_A9vCk4IDw5iZe8yeV1jKCqA/s96-c/photo.jpg?sz=128","display_name":"kumaran T","link":"https://stackoverflow.com/users/15356280/kumaran-t"},"is_answered":false,"view_count":6,"closed_date":1615314299,"answer_count":0,"score":0,"last_activity_date":1615314694,"creation_date":1615314222,"last_edit_date":1615314694,"question_id":66552666,"link":"https://stackoverflow.com/questions/66552666/prefilling-the-values-in-excel","closed_reason":"Duplicate","title":"prefilling the values in Excel"},{"tags":["linux","gnu-screen","debian-buster","screen-off"],"owner":{"reputation":1,"user_id":15340359,"user_type":"registered","profile_image":"https://i.stack.imgur.com/Uu4yP.png?s=128&g=1","display_name":"Sammy_Getty","link":"https://stackoverflow.com/users/15340359/sammy-getty"},"is_answered":false,"view_count":25,"answer_count":1,"score":0,"last_activity_date":1615314692,"creation_date":1615239869,"last_edit_date":1615314692,"question_id":66537659,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66537659/solved-automating-setterm","title":"Solved - Automating setterm"},{"tags":["python","list","function","boolean","palindrome"],"owner":{"reputation":1,"user_id":15362951,"user_type":"registered","profile_image":"https://lh6.googleusercontent.com/-rMqInUCWTAg/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmA7Vc1Ig8oUjYbOAmBCAyTXvyxhA/s96-c/photo.jpg?sz=128","display_name":"Katrina Grigoreva","link":"https://stackoverflow.com/users/15362951/katrina-grigoreva"},"is_answered":false,"view_count":25,"answer_count":4,"score":0,"last_activity_date":1615314688,"creation_date":1615312693,"last_edit_date":1615312818,"question_id":66552305,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552305/define-a-function-to-check-if-a-list-of-elements-is-palindrome-and-returns-a-lis","title":"define a function to check if a list of elements is palindrome and returns a list"},
        {"tags":["java"],"owner":{"reputation":3,"user_id":15283560,"user_type":"registered","profile_image":"https://lh3.googleusercontent.com/a-/AOh14GhOzWPfGGs-KZYbr-LMQL0NJnove7iK2BRLPpUW7w=k-s128","display_name":"Parag Narkhede","link":"https://stackoverflow.com/users/15283560/parag-narkhede"},"is_answered":false,"view_count":29,"answer_count":1,"score":-4,"last_activity_date":1615314686,"creation_date":1615313318,"last_edit_date":1615313604,"question_id":66552446,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552446/unable-to-split-comma-and-quotes-separated-values","title":"Unable to split comma and quotes separated values"},
        {"tags":["apache-kafka"],"owner":{"reputation":25,"user_id":3833400,"user_type":"registered","profile_image":"https://graph.facebook.com/756767542/picture?type=large","display_name":"Javier Navarro","link":"https://stackoverflow.com/users/3833400/javier-navarro"},"is_answered":false,"view_count":3,"answer_count":0,"score":0,"last_activity_date":1615314685,"creation_date":1615314685,"question_id":66552761,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552761/any-side-effects-of-adding-partitions-to-consumer-offsets-topic-after-the-clus","title":"Any side effects of adding partitions to __consumer_offsets topic after the cluster is up and running?"},{"tags":["html","css"],"owner":{"reputation":3,"user_id":15221672,"user_type":"registered","profile_image":"https://i.stack.imgur.com/iaFrb.png?s=128&g=1","display_name":"Billy Smith","link":"https://stackoverflow.com/users/15221672/billy-smith"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"last_activity_date":1615314679,"creation_date":1615314679,"question_id":66552760,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552760/how-to-make-a-parent-elements-height-be-controlled-by-a-single-child-with-anot","title":"How to make a parent element&#39;s height be controlled by a single child, with another child scrolling on overflow-y?"},
        {"tags":["vba","ms-word"],"owner":{"reputation":1,"user_id":15131625,"user_type":"registered","profile_image":"https://lh3.googleusercontent.com/a-/AOh14Gj3yu2X6CBmNb-9-_wr3zJzphoapvMVyNGu1wrFjA=k-s128","display_name":"Tony Forbes","link":"https://stackoverflow.com/users/15131625/tony-forbes"},"is_answered":false,"view_count":15,"answer_count":1,"score":0,"last_activity_date":1615314677,"creation_date":1615308155,"last_edit_date":1615308432,"question_id":66551141,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66551141/ms-word-vba-style-and-pagebreak-cleanup","title":"MS Word VBA Style and Pagebreak Cleanup"},{"tags":["django","postgresql","amazon-web-services","amazon-rds","case-insensitive"],"owner":{"reputation":215,"user_id":10612622,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/092cfe5667a58fcb97d247e748856ccf?s=128&d=identicon&r=PG&f=1","display_name":"alexrogo","link":"https://stackoverflow.com/users/10612622/alexrogo"},"is_answered":false,"view_count":15,"answer_count":1,"score":0,"last_activity_date":1615314675,"creation_date":1615308538,"last_edit_date":1615310989,"question_id":66551259,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66551259/programmingerror-function-lowerbigint-does-not-exist-django-aws-rds-postgr","title":"ProgrammingError: function lower(bigint) does not exist (Django, AWS RDS, PostgreSQL)"},
        {"tags":["algorithm","data-structures","graph"],"owner":{"reputation":1,"user_id":15305254,"user_type":"registered","profile_image":"https://lh3.googleusercontent.com/a-/AOh14Gh2bT_2a0RWGMQlFD845LDZimT-Ep7k-DBStDm5=k-s128","display_name":"Tejas Kashyap","link":"https://stackoverflow.com/users/15305254/tejas-kashyap"},"is_answered":false,"view_count":27,"answer_count":1,"score":0,"last_activity_date":1615314674,"creation_date":1614584100,"question_id":66418177,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66418177/peculiar-questions-in-data-structure-test","title":"Peculiar Questions In data structure Test"},{"tags":["vba"],"owner":{"reputation":1,"user_id":15362591,"user_type":"registered","profile_image":"https://lh4.googleusercontent.com/-YZRV1hV429w/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmRn-5ehdlJC5fj5GcOrHsUjCEBPg/s96-c/photo.jpg?sz=128","display_name":"VBA Noob","link":"https://stackoverflow.com/users/15362591/vba-noob"},"is_answered":false,"view_count":21,"answer_count":1,"score":0,"last_activity_date":1615314673,"creation_date":1615309994,"last_edit_date":1615313469,"question_id":66551660,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66551660/moving-documents-from-one-folder-to-another","title":"Moving documents from one folder to another"},{"tags":["linux","bash","shell","sh"],"owner":{"reputation":1,"user_id":10090156,"user_type":"registered","profile_image":"https://lh4.googleusercontent.com/-czDO6SCGi34/AAAAAAAAAAI/AAAAAAAABO8/Xg6Z8yznZcM/photo.jpg?sz=128","display_name":"Selman Keskin","link":"https://stackoverflow.com/users/10090156/selman-keskin"},"is_answered":true,"view_count":46,"answer_count":2,"score":0,"last_activity_date":1615314671,"creation_date":1615301637,"question_id":66549237,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66549237/when-the-input-is-entered-as-n-it-returns-yes-what-could-be-the-problem","title":"When the input is entered as &quot;N&quot;, it returns &quot;YES&quot;, what could be the problem?"},
        {"tags":["c#"],"owner":{"reputation":19,"user_id":5566500,"user_type":"registered","profile_image":"https://graph.facebook.com/10207533108990860/picture?type=large","display_name":"wrb","link":"https://stackoverflow.com/users/5566500/wrb"},"is_answered":true,"view_count":36,"answer_count":1,"score":0,"last_activity_date":1615314671,"creation_date":1615314308,"last_edit_date":1615314671,"question_id":66552688,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552688/how-may-a-c-foreach-interator-yield-a-null-reference","title":"How may a C# foreach interator yield a null reference"},{"tags":["sql","ms-access"],"owner":{"reputation":11,"user_id":9157236,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/8f76e50b555e8d9099ee8bcf2b562b9d?s=128&d=identicon&r=PG&f=1","display_name":"sleibo","link":"https://stackoverflow.com/users/9157236/sleibo"},"is_answered":false,"view_count":18,"answer_count":1,"score":0,"last_activity_date":1615314669,"creation_date":1615306260,"last_edit_date":1615306903,"question_id":66550591,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66550591/msaccess-list-last-date-paid-and-sum-of-all-payments","title":"MSAccess: list last date paid and sum of all payments"},{"tags":["python","pandas"],"owner":{"reputation":241,"user_id":3436634,"user_type":"registered","accept_rate":60,"profile_image":"https://graph.facebook.com/10153528855892989/picture?type=large","display_name":"Blue Demon","link":"https://stackoverflow.com/users/3436634/blue-demon"},"is_answered":false,"view_count":8,"answer_count":0,"score":0,"last_activity_date":1615314656,"creation_date":1615314656,"question_id":66552756,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552756/how-do-i-make-pandas-read-csv-ignore-separator-between-partially-quoted-values","title":"How do I make pandas read_csv ignore separator between partially quoted values?"},{"tags":["math","floating-point","ieee-754"],"owner":{"reputation":15,"user_id":13561449,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/be1e4332073e3acb95346120d0ccfae2?s=128&d=identicon&r=PG&f=1","display_name":"Johnnb","link":"https://stackoverflow.com/users/13561449/johnnb"},"is_answered":false,"view_count":15,"answer_count":2,"score":0,"last_activity_date":1615314654,"creation_date":1615312477,"question_id":66552267,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552267/how-to-subtract-two-positive-ieee-754-numbers","title":"How to subtract two positive IEEE-754 numbers?"},{"tags":["oop","lua","roblox"],"owner":{"reputation":1,"user_id":15363217,"user_type":"registered","profile_image":"https://www.gravatar.com/avatar/d14cf1316ff49a84193de2c61bf6410d?s=128&d=identicon&r=PG&f=1","display_name":"imp","link":"https://stackoverflow.com/users/15363217/imp"},"is_answered":false,"view_count":3,"answer_count":0,"score":0,"last_activity_date":1615314653,"creation_date":1615314653,"question_id":66552754,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552754/creating-of-a-new-object-of-a-different-class-gets-overriden-every-time-its-cre","title":"Creating of a new object of a different class gets overriden every time it&#39;s created"},{"tags":["javascript","mongoose"],"owner":{"reputation":27,"user_id":14451464,"user_type":"registered","profile_image":"https://lh5.googleusercontent.com/-LFJxn7oIpuo/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmVShkqW4ehW5hnzWs53OR8QoAvRA/s96-c/photo.jpg?sz=128","display_name":"Rui Pedro","link":"https://stackoverflow.com/users/14451464/rui-pedro"},"is_answered":false,"view_count":2,"answer_count":0,"score":0,"last_activity_date":1615314652,"creation_date":1615314652,"question_id":66552753,"content_license":"CC BY-SA 4.0","link":"https://stackoverflow.com/questions/66552753/mongoose-group-count-by-periods-of-15-seconds","title":"Mongoose Group count by periods of 15 seconds"}]

    let items = [];
    if(props.data) {
        items = props.data.map(item => 
            <QuestionItem item={item}/>
        ); 
        console.log(items);
    }
    
    
    console.log('sort ' + props.sortType);
    
    return (
        <div>
            <h2>Top Questions</h2>

            <Sorting getSorting={props.setSorting} sort={props.sortType + '-' + props.sortOrder}/>
            <div className={style.items}>
                { items }
            </div>

        </div>
    );
}

export default Home;