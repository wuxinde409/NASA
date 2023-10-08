import { Link } from 'react-router-dom';
import Marsmodel from '../marsmodel';
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
function Moon(){
    
    return(

        <div>
            <Marsmodel></Marsmodel>
        </div>
    )
}
export default Moon;