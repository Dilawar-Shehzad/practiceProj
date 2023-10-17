import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView >
      <View style={styles.mainCont} >
        <Text style={styles.sectionContainer}>Hello React Native</Text>
        <Text style={styles.sectionContainer}>Hello React Native</Text>
        <Text style={styles.sectionContainer}>Hello React Native</Text>
        <Text style={styles.sectionContainer}>Hello React Native</Text>
        <Text style={styles.sectionContainer}>Hello React Native</Text>
        <Text style={styles.sectionContainer}>Hello React Native</Text>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    fontSize: 18,
    padding: 12,
  },
  mainCont: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: 'wrap',
    paddingHorizontal: 22,
    alignItems: "center",
    paddingVertical: 22,
  }
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
