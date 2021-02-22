import {StyleSheet} from 'react-native';
import {hScale, vScale, width, height} from '../../commons/PerfectPixel';
import colors from '../colors/colors';

const styles = StyleSheet.create({
    titleIntro:{
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
    },
    imgIntro:{
        width: 200,
        height: 200,
    },
    txtIntro:{
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
    },
    btnPrevIntro:{
        width: 10,
        height: 20,
        marginTop: 15,
        marginLeft: 15
    },
    btnNextIntro:{
        width: 10,
        height: 20,
        marginTop: 15,
        marginRight: 15
    },
    btnSkipIntro:{
        position: 'absolute',
        right: 15,
        top: 15
    },
    containerIntro:{
        flex: 1,
        alignItems: 'center',
        paddingBottom: 100,
        paddingTop: 50
    },
    containerSplash:{
        width: '100%',
        height: '100%'
    },
    wrapperCSTop:{
        alignItems:'center',
        marginTop: 50
    },
    csTop1:{
        position: 'absolute',
        width: 250,
        height: 230
    },
    csTop2:{
        position: 'absolute',
        width: 250,
        height: 230
    },
    csTop3:{
        position: 'absolute',
        width: 230,
        height: 230,
        marginTop: 15,
        // left: 10
    },
    wrapperCSCenter:{
        height:200,
        marginTop: 180
    },  
    csCenter1:{
        position: 'absolute',
        width: 130,
        height:80,
        right: '10%',
        top: '120%'
    },
    csCenter2:{
        position: 'absolute',
        width: 130,
        height:80,
        left: '10%',
        top: '150%'
    },
    csBottom:{
        position:'absolute',
        bottom:0,
        width: '100%',
        height: '50%'
    },
    bgLogoApp:{
        width: 250,
        height: 250,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
    },
    logoApp:{
        width: 90,
        height: 90
    },
    styleAnim:{
        alignItems:'center'
    },
    cloud1:{
        height: 50,
    },
    animBottom:{
        position:'absolute',
        bottom:0,
        width: '100%',
        height: '100%',
        // backgroundColor: 'red'
    },
    btnActionIntro:{
        width: hScale(449),
        height: vScale(118),
        backgroundColor: '#fff',
        borderRadius: 45,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: vScale(430)
    },
    txtAction:{
        width: hScale(175),
        height: hScale(52),
    },
    txtSkip:{
        color: colors.deepPink,
        fontSize: hScale(21),
        fontWeight: 'bold'
    }
})


export default styles;