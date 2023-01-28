import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
    providedIn: 'root'
})

export class AxiosServices {
    urlBase:string="https://opendata.jabarprov.go.id/api-backend/bigdata/diskanlut/od_18465_jml_nelayan__jenis_perairan_kabupatenkota?limit=5"
      constructor() {

      }
    fetchDataAllData(){
        return axios.get(this.urlBase).then(res=> {
            console.log(res.data.data);
            return res.data.data
        }).catch((error)=>{
            console.log(error);
        })
    }  
}

