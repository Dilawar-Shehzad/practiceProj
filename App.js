import React, { useCallback, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={{
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50
    }}>
      <Text>Hello</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    fontSize: 12,
    color: 'red',
    marginHorizontal: 20,
  },
  mainCont: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: 'center',
    marginHorizontal: 20,
    height: 40,
    paddingLeft: 12
  },

});

export default App;



// https://github.com/Expensify/App/issues/29750
// 1) Using clibBoard in funtion that can copy our text and emoji
// 2) save copy element in useState.
// 3) use this State where to paste our clipboard function 
// 4) import Dimension states for width to our main container according to dufferent mobile sizes 
// 5) Flex_wrap and other flex properties to maintaine width and height
// 6) call main funtion in 'Text' tag
// ----------Practical CODING--------
//  const mainFuntion = (word) =>{
//   const tempword = word?.map(item => {return item })
//   if (tempword?.startWith("EMOJI")) {
//     return(
//       <>
//       <Text>{tempword?.toString()}</Text>
//       </>
//     )
//   } else {
//     <Text>{tempword?.toString()}</Text>
//   }
//   return tempword;
//  }
{/* <View style={{ 
    width:WINDOW_WIDTH + 0.2,
    paddingvertical:10,
    paddingHorizontal:10,
    flex:1,
    justiContent:Spacebeteen,
    flex-Wrap:wrap-now,
    align-Item:'center}}>
  <Text>{tempword(Sentenced)}</Text>
  </View> */}


// https://github.com/Expensify/App/issues/29749
// 1) use rn-fetch-blob packages if not installed
// 2) make async function to create path of file in mobile
// 3) use funtion on pressable componnts
// 4) when funtion runs, the texts converted into json
// 5) android take persmission for downloading the path in mobile directory
// 6) async callback funtion return the path or msgError
// 7) For Permissions android Add some-line into "AndroidManifest.xml" file android folder of app
// 8) stop rotuing or navigation if using.
// ---------Practical CODING--------
// const handleDownload = () => {
//   const res = await RNFetchBlob.config({
//   addAndroidDownloads: {
//       useDownloadManager: true,
//       notification: true,
//       mime: 'file/pdf',
//       title: filename,
//       path: "Directory",
//   },
// }).fetch('GET', "URL OF API", {
//   Authorization: 'Bearer ' + Api.Bearer, //IF REQUIRED
// });
// console.log('res ==>',res);
// const newRes =  RNFetchBlob.config({
//   fileCache: true,
// }) .fetch("GET", "http://www.example.com/file/example.zip/.pdf", {
//   })
//   .then((res) => {
//    the temp file path
//     console.log("The file saved to ==> ", res.path());
//   }).catch((error)=>{console.log("if Error ==> ", error?.message});
//  console.log("newRes ==>",newRes)
// }
// handleDownload()
// OR If used in WEB
// Sinmply create DOM and link with a tag, browser auto download the url

// https://github.com/Expensify/App/issues/29748
// 1) Mount the Request Tab
// 2) select the points and save in useState
//  const [points,setPoint] = useState({
//   startPoint:  null/undefined ,
//   finishPoint:  null/undefined
//  })
// 3) These points in state constains each values seperately in the object with key value
// 4) Object helps in smooth manipullation of data
// 5) Created Funtion where call the both points with thier values of each i.e==:> points?.startpoint && points?.finshPoint
// 6) call funtion for statrt & finish data then hit api
// -----Practical Coding-------
//  const handlePoints = () =>{
//   let tempStartinpoint = points?.startPpoint
//   let tempFinishPoint = points?.finishPoint
// if(points?.startpoint != undefined/null && points?.finshPoint != undefined/null ){
//   //   try {
//   // dispatch(call the api funtion)
//   //   } catch (error) {
//   //  API ERROR
//   // console.log("ERROR -->",error?.mesaage);
//   //   }
//   //  }
// }else{
//   return alert('values Missing')
// }

// RICH TEXT METHOD
// combie many text under the single main Text tag
// example
//  <Text ellipsizeMode='middle' numberOfLines={1} >
//   <Text>{"SAMPLE_TEXT_1"}</Text>
//   <Text>{"SAMPLE_TEXT_2"}</Text>
//  </Text>

// ___________________________________________
// https://github.com/Expensify/App/issues/29803
//  1) save both values in Redux
//  2) At Finish point Call UseReducer and get the redux values
//  3) Match the both values from redux
//  4) created callback funtion for resultant
//  5) change error msg if values does not match
// ---Practical Coding--------
//   const {startPoint,finishPoint} = useReducer(state => state)
//  const handleError = () =>{
//   if(startPoint?.value == finishPoint?.value){
// // hit API
//   }else{
//  alert('Please remove duplicate waypoints')
//   }
//  }

// https://github.com/Expensify/App/issues/29783
//  1) save value in redux funtions
//  2) use redux value in both pages under funtion
//  3) create single funtuion and call it in both pages or components
//  4) pass parameter in funtions that check redux address if it is valid or not
//  5) if address is not valid function return something like false,null,undefined
//  6) final results will depend on below condition
//  ---------Practical Coding--------
//  const searchAdress = useReducer(state => state)
//  const CheckAddress = (data) =>{
//  validAdress is from api
//   if(data?.address == validAdress){
//  when we have valid & Existing values
//     return dispatchEvent({tyep:CHECK_ADDRESS,payload:true})
//    }else{
//     dispatchEvent({tyep:CHECK_ADDRESS,payload:false})
//   }
//   }
//  implemet this condition in both pages under Text Components
//  {searchAdress.value == undefined || null || false ?
//   <>
//     <Text>{"Please select a valid pointway"}</Text>
//   </>:
//   <>
//     <Text>{"searchAdress.startPoint"}</Text>
//   </>
// }


// 30904
// (FrontEnd Side)  we can make an static measurements points for the pixels of image that can verify before uploading the image on backend, the values points measure the pixels with by defualt values and if the pixel is below and eaqual to 2048px run the querry of uploading with no error otherwise use state and enable error here that clearified user that image is bigger than the limit  and image should not uploaded
// (BackEnd Side) on the backend size there must be condition on querry that check the pixel limit size and on the true condition make db or server to accept the image with it's requirements size and show error


// *30848*
//  the issue is when we user go to offline API is not working and do not hide green dot, it is need to be secure pay request in local state in the functions where offline and online things is settiled, the conditions is added here in the offline setup to change color on the tap of button "Pay with Expensify", then our green dot is based on the state condition if tap is anbled with offline or online then show the dependecy of dots colour 

// *30895*
// Message text is not rendering with Scrolling, when in large text user is scrolling it will stuck and show empty screen, here we need to use pagination of the text in which allow 20 to 30 prevoius text as on scroll and hide other text, In this way the funtions helps to show only selected text and show long text with some string by clicking it on show whole text same as whatsapp type 

  // *30798*
  // In this, the cancel task's id created the new one tast with same data with pinned or unpinned chat rooms, in LHN we need to filter and seperate both accounts on with params that is pinned or unpinned whole Chat-Rooms message is stored in sinlge store and then filter according to  param of pinned or unpinned selection, then show both within single line of chats room builder, that's filteration need a conditions that will help to show both the chats-room without any doubling and for same data value the data. 

  // *30893*
  // If this count, update an api call api with send button or icon, used state to create clone of array with works in current data when user is added in the array show it's length in the form of values and it's will work immediately and show changes and addition of user back to back within array length, just have to know the actual format of vlaues form api or cloning array, In this way user could see changes randomly







  // *NEW_RELIC*
  // 1) login to your new relic account and check Perfromance Monitoring feature is included or not 
  // 2) Choose Dashboards from the New Relic One main screen. the dashobaord's contains visible button to create new Dashboard.
  // 3) Press button for Establish a dashboard, Give the dashboard a name that is clearly recognisable and save it in your local device too.
  // 4) Make sure the appropriate Account is chosen from the dropdown menu. choose this action carefully beacuse it can't be modified.
  // 5) To add a new chart of your choise, click the addition sign (+).
  // 6) Select the permissions you want for the control panel. Edit - All account permissions are selected by default. You can change them later in the settings menu when using the panel. 
  // 7) Click on NRQL Query  Insert widget NRQL Alternatively, you can also select PromQL-Style or Basic from the main dashbard screen.
  // 8) Press Save and Montior your project's anylatics
  // *Note:* Once you add a widget, the dashboard automatically updates with the data. If you want to add images or graphics to the dashboard, select Add Text, Images or Links when you add a widget. Now you can see your data in a new way within APM!

  // NRQL is New Relic's SQL-like query language, which it continues the overflowing the query of Item in Sql language,
  // With the NRQL query builder , you can run queries of your data to create custom charts and other visualizations which helps you to monitoring tha app's data and thier corresponding in app envirenoment, 
 // Our MySQL integration collects  inventory and metrics from  databases and sends them to our platform. There, you can check the health of your database server and analyze metrics data, making it easier to find the source of  problems.

//  *31002*
//  there component is not rendering the whole at once when user is clicked on the mail, component is not render and show blink on the screen, here we need to use UseEffect(()=>{},[]) or useCallback(()=>{},[]) with cleaning and uncleaned the message, it hide the glitch of screen and show navigate on the selected screen smoothly.


// A New Relic is a piece of software that install on a host or servers  in an application that sends performance data to New Relic Dashboard. Where We use different agents for different products and coding languages. New Relic's infrastructure monitoring agent is a lightweight executable file that collects data about your hosts. It also reports data from some third party services, if enabled, and also log data. these all help us to monitoring the data of our host and anayalze the problem with it's transparent solutions which helps to establish solid realtionship with products and business.

// *31020*
//  In this Apple Id we have to chekc the apple id setup that may be the blockage from api and only allowed us to login with changing data in response it it is work fine the allow user to login again and rematched the from last response with new repaonse, and show finally relavent dataon the user's screen, but before clear chache of browser and global state data of our current user which will be come from our apple id's reponse 

// *30999*
// In this we need to scroll the selection list according to length of array and remove extra space too, when current array.length > 0 give scroll with some spacing, we have to create fnctions that will work on our array.length and call it under the useEffect with one cleaning functions, it's cacth our keboard's action and show data, this function is working on focus of our input and help us to avoid giving more and extra space and did not allow over scrolling with data

// *31019*
// it is accuring due to the focus touch eabled in keyboard, after every scroll keyboard detects that it is eanbled and then enabled keyboard. there's one function need to be run in instant which cath the state and focus value of keyboard, and then disable keyboard when user is scrolling the section list and loose the focus on the input component. this all goes under signle useEffect with two funtions that clean or unclean the functions at the time 