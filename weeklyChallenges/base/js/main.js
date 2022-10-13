// function isThisLeet(param){
// let obj ={'0':'O', '5':'S' , '1' : 'I' , '6' : 'G',
// '2' : 'Z'    ,  '7' : 'L',
// '3' : 'E' ,    '8' : 'B',
// '4' : 'h'    ,  '9' : 'q'}

// let obj2={
//     'O':'0', 'S':'5' , 'I' : '1' , 'G' : '6',
// 'Z' : '2'    ,  'L' : '7',
// 'E' : '3' ,    'B' : '8',
// 'h' : '4'    ,  'q' : '9'
// }

// let arr = param.split('')

// for(let i = 0; i < arr.length; i++){
//     if(obj[arr[i]]){
//         arr[i] = obj[arr[i]]
//     }
//     else if(obj2[arr[i]]){
//         arr[i] = obj2[arr[i]]
//     }
// }
// console.log(arr.join(''));
// }

// isThisLeet("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." )

function cleanIt(str){

    let lilc = str.indexOf('c')
    str = str.slice(lilc)
    // console.log(str);
    str = str.split('Eek!').join('').split('').reverse().join('')
    str = str.split('v')
    firstChar = str.map((x) => x[0])
    // console.log(str);
    console.log(firstChar);
}


cleanIt("af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"
)

// day2 Space

// day3

function removeSpace(str){
   str = str.replace(/[Space]+/g, ' ')
   console.log( str);
}

removeSpace('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
)

// day4

function bigRevers(rev){
    // rev = rev.split('')
    result=[]
    for (let i = 1; i < rev.length; i++) {
        const element = rev[i];
        result.push(rev[rev.length - i])
    }
    console.log(result.join(''));
}

bigRevers(" .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   ")


// day5

function decodeSub(subs){

    let decodeArr = subs.split(',')
    let decodeArrNoWhite = decodeArr.filter((x) => x.length == x.trim().length)
    let decodeArrNoWoof = decodeArrNoWhite.filter((x) => !x.includes('Dog') &&  !x.includes('dog') && !x.includes('Bone') && !x.includes('bone') && !x.includes('Bark') && !x.includes('bark'))
    let no5 = decodeArrNoWoof.filter((x) => x.length % 5 !== 0)
    let oddSumNo = no5.filter((x) => (x.charCodeAt([0]) + x.charCodeAt([x.length-1])) % 2 !==0 )
    let noMidE = oddSumNo.filter((x) => x.length % 2 == 0 ? x[(x.length/2)] !== 'e' : x[(Math.floor(x.length/2))+1] !== 'e')
    let noS = noMidE.filter((x) => !x.includes('S'))
    let noEvenLower=[]
    for (let i = 0; i < noS.length; i++) {
        const element = noS[i];
        let lowers = noS[i].replace(/[A-Z&' ]+/g, '')
        if(lowers.length % 2 == 0){ noEvenLower.push(noS[i])}
    }
    console.log(noEvenLower);
}


decodeSub("The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"
)