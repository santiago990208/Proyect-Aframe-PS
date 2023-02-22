class BuilderAPI {
    constructor(api_link,username,password) {
        this.api_link = api_link;
        this.username = username;
        this.password = password;
      }
  
    api_call(){

        const request = new Request(this.api_link);
        const urlObject = new URL(this.api_link);
        const host = urlObject.hostname;
        const authorization = 'Basic ' + btoa(this.username + ":" + this.password); 

        fetch(request, {
          method: 'GET',
          headers: {
            'Authorization': authorization,
            'Content-Type': 'application/json',
            'Host': host,
          }
        })
        .then(response => {
            if (!response.ok) {
                var popup_consult_sr_respond = document.querySelector('#popup_consult_sr_respond');
                popup_consult_sr_respond.setAttribute('scale', '1 1 1');
                var textarea = document.createElement('a-entity'); 
                var text_design = ';wrapCount:12;align:center; width: 1.6; color: red; lineHeight:60;'
                textarea.setAttribute('id', 'sr_ERROR');
                textarea.setAttribute('geometry', 'primitive:plane;  width:1.8 ');
                textarea.setAttribute('material', 'transparent:true; opacity: 0; alphaTest: 1');
                textarea.setAttribute('position', {x:0,y:-0.6,z:0.01});
                textarea.setAttribute('text', 'value: ' + 'THERE IS NOT SR WITH THAT ID'+text_design);
                
                document.querySelector('#api_respond_info').appendChild(textarea);
                var consult = document.querySelector('#consult_button');
                consult.setAttribute('text','value:Consult;wrapCount:18; align:center; width: 1.6; color: black; lineHeight:60;');
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            let desiredKeys = [ "Title", "SrNumber", "SrCreatedBy", "ReportedByEmailAddress", "StatusTypeCdMeaning", "SrLastUpdateDate", "SrLastUpdatedBy" ];
            var count = 1
            
            desiredKeys.forEach(key => {
                var value = `${key}: ${data[key]}`;
                this.builder_sr_request(key, value, count)
                count = count +1
            });
        })
        .catch(error => {
            console.log(error);
            var popup_consult_sr_respond = document.querySelector('#popup_consult_sr_respond');
            popup_consult_sr_respond.setAttribute('scale', '1 1 1');
            var textarea = document.createElement('a-entity'); 
            var text_design = ';wrapCount:12;align:center; width: 1.6; color: red; lineHeight:60;'
            textarea.setAttribute('id', 'sr_ERROR');
            textarea.setAttribute('geometry', 'primitive:plane;  width:1.8 ');
            textarea.setAttribute('material', 'transparent:true; opacity: 0; alphaTest: 1');
            textarea.setAttribute('position', {x:0,y:-0.6,z:0.01});
            textarea.setAttribute('text', 'value: ' + 'There is an error'+text_design);
            
            document.querySelector('#api_respond_info').appendChild(textarea);
            var consult = document.querySelector('#consult_button');
            consult.setAttribute('text','value:Consult;wrapCount:18; align:center; width: 1.6; color: black; lineHeight:60;');
        })

        
    }
  
    builder_sr_request(key, value, count){
        try {
            var popup_consult_sr_respond = document.querySelector('#popup_consult_sr_respond');
            popup_consult_sr_respond.setAttribute('scale', '1 1 1');
            
            var text_design = ';align:center; width: 1.6; color: black; lineHeight:60;'
            
            var textarea = document.createElement('a-entity'); 
            var y = -((0.2*count)-0.2);
            textarea.setAttribute('id', 'sr_'+key);
            textarea.setAttribute('geometry', 'primitive:plane;  width:1.8 ');
            textarea.setAttribute('material', 'transparent:true; opacity: 0; alphaTest: 1');
            textarea.setAttribute('position', {x:0,y:y,z:0.01});
            textarea.setAttribute('text', 'value: ' + value + text_design);
            
            document.querySelector('#api_respond_info').appendChild(textarea);
            var consult = document.querySelector('#consult_button');
            consult.setAttribute('text','value:Consult;wrapCount:18; align:center; width: 1.6; color: black; lineHeight:60;');
          
          } catch (error) {
            console.error("An error occurred while processing the API call: " + error);
          }
     }


  }
  
    