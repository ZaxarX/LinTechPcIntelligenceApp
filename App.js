import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, CheckBox} from 'react-native';
import  'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
const Stack = createStackNavigator();
 
function Greeting(props){
  return props.data.map((obj, index) => {
	const key = index;
	return <View style={styles.cardRounded}>
	<Text style={[styles.GreetingText]} key={key}>{obj.contact} {obj.number} {"\n"} {obj.email}</Text>
	</View>
  });
}
 
function LoginScreen({ navigation }) {
  return (
	<View style={styles.bgColor,{flex: 1, backgroundColor:"#a2f5ee", alignItems: 'center', justifyContent: 'center' }}>
	<Text style={{fontWeight: 'bold', fontSize: 20}}>LinTech PC Intelligence App</Text>
  	<View>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/836253288517075014/Computer-Setup3.png' }}/>
  	<TextInput placeholder="Username" style={styles.inputFields}/>
  	<TextInput placeholder="Password" style={styles.inputFields} secureTextEntry={true}/>
  	</View>
	<View style={{marginTop: '2%'}}>
  	<Button title="Login" onPress={() => navigation.navigate('Home')}/>
  	<Text style={{marginTop: '5%'}}>Don't have an account yet?</Text>
  	<TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
    	<Text style={{
      	color: '#36ddd8',
      	textAlign: 'center',
    	}}>
      	Sign up
    	</Text>
  	</TouchableOpacity>
 	 
	</View>
  </View>
  );
}

function SignUpScreen({ navigation }) {
  return (
 	<View style={styles.bgColor,{flex: 1, backgroundColor:"#a2f5ee", alignItems: 'center'}}>
  	<Text style={{fontWeight: 'bold', fontSize: 20}}>Account Registration</Text>
  	<View>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/836252375202398248/unknown.png' }}/>
  	<TextInput placeholder="FullName" style={styles.inputFields}/>
  	<TextInput placeholder="Username" style={styles.inputFields}/>
  	<TextInput placeholder="Password" secureTextEntry={true} style={styles.inputFields}/>
  	<TextInput placeholder="Confirm Password" secureTextEntry={true} style={styles.inputFields}/>
  	<TextInput placeholder="Email" style={styles.inputFields}/>
  	</View>
    
	<View style={{
  	marginTop: '2%'
	}}>
  	<Button
  	title="Register"
  	onPress={() => navigation.navigate('Login')}
  	/>
	</View>
	</View>
  );
}
function HomeScreen({ navigation }) {
  return (
  <View>
	<View style={styles.bgColor,{flex: 1, backgroundColor:"#a2f5ee",paddingLeft: 20,}}>
   	 <View style={{flexDirection: "row"}}>
   		 <Image style={{
   					 width: 25,
   					 height: 25,
   					 marginTop: 5,
   					 marginRight: 8,
   				 }} source={{uri:'https://media-public.canva.com/Mf2MU/MAA9p_Mf2MU/4/s.svg' }}/>
   				 
   		 <TouchableOpacity onPress={() => navigation.navigate('About')}>
   			 <Text style={{margin: 8,}}>About Us</Text>
   		 </TouchableOpacity>
   		 
   		 <TouchableOpacity onPress={() => navigation.navigate('Contact Information')}>
   			 <Text style={{margin: 8,}}>Contact Information</Text>
   		 </TouchableOpacity>
   		 
   		 <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
   			 <Text style={{margin: 8,}}>Logout</Text>
   		 </TouchableOpacity>
   	 </View>
    	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/836254575543058541/unknown.png' }}/>
	</View>
	<View style={{
  	flexDirection: "column",
      marginTop: 10,
	}}>
  	<View style={{
    	flex: 1
  	}}>
  	<TouchableOpacity onPress={() => navigation.navigate('Intel Processors')}>
    	<Text style={styles.HomeBtn}>
      	Intel Processors Page
    	</Text>
  	</TouchableOpacity>
 	 
  	<TouchableOpacity onPress={() => navigation.navigate('Intel Motherboard')}>
    	<Text style={styles.HomeBtn}>
      	Intel Motherboard Page
    	</Text>
  	</TouchableOpacity>
 	 
  	<TouchableOpacity onPress={() => navigation.navigate('AMD Ryzen Processors')}>
    	<Text style={styles.HomeBtn}>
     	AMD Ryzen Processors Page
    	</Text>
  	</TouchableOpacity>
 	 
  	<TouchableOpacity onPress={() => navigation.navigate('AMD Motherboard')}>
    	<Text style={styles.HomeBtn}>
    	AMD Motherboard Page
    	</Text>
  	</TouchableOpacity>
  	</View>
 	 
 	 
  	<View style={{
    	flex: 1
  	}}>
  	<TouchableOpacity onPress={() => navigation.navigate('Video Card / Graphics Card')}>
    	<Text style={styles.HomeBtn}>
      	Video Card / Graphics Card Page
    	</Text>
  	</TouchableOpacity>
 	 
  	<TouchableOpacity onPress={() => navigation.navigate('Other Components')}>
    	<Text style={styles.HomeBtn}>
  	Other Components Page
    	</Text>
  	</TouchableOpacity>
 	 
  	<TouchableOpacity onPress={() => navigation.navigate('Monitors')}>
    	<Text style={styles.HomeBtn}>
      	Monitors Page
    	</Text>
  	</TouchableOpacity>
 	 
  	<TouchableOpacity onPress={() => navigation.navigate('Peripherals')}>
    	<Text style={styles.HomeBtn}>
      	Peripherals Page
    	</Text>
  	</TouchableOpacity>
	</View>
   	 <ImageBackground style={{width: '49vw', height: 300,marginTop: '-10vh',zIndex:-1,}} source={{uri:'https://media-public.canva.com/Kxo7Q/MAEWSLKxo7Q/1/s.svg' }}>
   	 </ImageBackground>
	</View>
  </View>
  );
}
 
function AboutScreen({ navigation }) {
  return (
 	<View style={styles.bgColor,{flex: 1, backgroundColor:"#a2f5ee", alignItems: 'center'}}>
  	<Text style={{fontWeight: 'bold', fontSize: 20}}>OVERVIEW</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/836254027016175686/unknown.png' }}/>
 	 
  	<Text style={{
  	marginLeft: 25,
  	marginRight: 20,
  	textAlign: 'center'
 	}}>
  	LinTech PC Intelligence Application will help you to build your dream PC Rig. We will serve our best so that nothing is wasted on your budget. We will provide what suits with your budget and you can be sure that every cent of your money will not be wasted. </Text><br></br>
 
  	<Text style={{
  	marginTop: '2%',
  	marginLeft: 25,
  	marginRight: 20,
  	fontSize: 12,
  	fontStyle: 'italic'
	}}>
  	Mission: LinTech PC Intelligence App is committed to enhancing the technological knowledge and experience of every Filipino by providing reliable, high-quality products and become excellent informative source about the difference kinds of pc parts.</Text><br></br>
 
  	<Text style={{
  	marginTop: '2%',
  	marginLeft: 25,
  	marginRight: 20,
  	fontSize: 12,
  	fontStyle: 'italic'
	}}>
	Vision: LinTech PC Intelligence App vision is to uplift the Filipino community by giving them a knowledge and informative source about the different kind of computer parts. We strive to become resourceable anyone who wants access to technology – whether these are high-end products or those that cater to normal day-to-day needs.</Text>
 
  	<Button
    	title="Home"
    	onPress={() => navigation.navigate('Home')}
  	/>
	</View>
  );
}
 
function UserInfoScreen({ navigation }) {
  let persons = [{
	"contact":"Contact Us:",
	"number":" 0956-***-****",
	"email":"lintechpcbuild@gmail.com"
  }]
  return (
 	<View style={styles.bgColor,{flex: 1, backgroundColor:"#a2f5ee", alignItems: 'center'}}>
  	<Text style={{fontWeight: 'bold', fontSize: 20}}>LinTech Contact Info</Text>
	<Text style={{fontSize: 15}}>
	<Greeting data={persons}/>
	</Text>
  	<Button
    	title="Home"
    	onPress={() => navigation.navigate('Home')}
    	/>
	</View>
  );
}
 
function OneScreen({ navigation }) {
  return (
 	<View style={styles.bgColor,{flex: 1, backgroundColor:"#a2f5ee", alignItems: 'center'}}>
  	<Text style={{fontWeight: 'bold', fontSize: 20}}>Intel Core i9-10900K </Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://media.discordapp.net/attachments/835876193914978306/836940521283911711/unknown.png' }}/>
  	<Text style={styles.productAlign}> The Intel’s latest 10th Gen Intel Core i9-10900K unlocked desktop processor. Featuring Intel Turbo Boost Max Technology 3. 0, unlocked 10th Gen Intel Core desktop processors are optimized for enthusiast gamers and serious creators and help deliver high performance overclocking for an added boost. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Intel Core i9-9900K</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/836940580487561266/unknown.png' }}/>
  	<Text style={styles.productAlign}> The Core i9-9900K 3.6 GHz Eight-Core LGA 1151 Processor from Intel is designed for gaming, creating, and productivity. It has a base clock speed of 3.6 GHz and comes with features such as Intel Optane Memory support, AES-NI encryption, Intel vPro technology, Intel TXT, Intel Device Protection with Boot Guard, Intel VT-d virtualization technology for directed I/O, and Intel Hyper-Threading technology for 16-way multitasking. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Intel Core i9-10700K</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://media.discordapp.net/attachments/835876193914978306/836940542369071164/unknown.png' }}/>
  	<Text style={styles.productAlign}> Along with i9-10900K same generation with the Core i7-10700K 3.8 GHz Eight-Core LGA 1200 Processor from Intel has a base clock speed of 3.8 GHz and comes with features such as Intel Optane Memory support, Intel vPro technology, Intel Boot Guard, Intel VT-d virtualization technology for directed I/O, and Intel Hyper-Threading technology. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Intel Core i5-10600K</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://media.discordapp.net/attachments/835876193914978306/836940631225925692/unknown.png' }}/>
  	<Text style={styles.productAlign}> The Intel Core i5-10600K is a six-core/12-thread CPU with an Intel UHD Graphics 630 integrated graphics processor (IGP), a rather high TDP of 125 watts, and a 4.1GHz base clock. Intel claims the chip is capable of hitting 4.8GHz on both single-core and all-core tasks </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Intel Core i3-10300</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://media.discordapp.net/attachments/835876193914978306/836940662275309588/unknown.png' }}/>
  	<Text style={styles.productAlign}> With Intel Turbo Boost 2.0, the maximum turbo frequency this processor can achieve is 4.4 GHz. Additionally, this processor features 4 cores with 8 threads in an LGA 1200 socket. </Text>
	</View>
  );
}
 
function TwoScreen({ navigation }) {
  return (
 	<View style={styles.bgColor,{flex: 1, backgroundColor:"#a2f5ee", alignItems: 'center'}}>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Asus ROG Maximus XIII Hero Z590</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/836950367144771694/unknown.png' }}/>
  	<Text style={styles.productAlign}> The Rog Maximus XIII Hero is worth its price tag. Its list of features, which includes Wi-Fi 6, PCIe 4.0, tons of ports (including two thunderbolt), and four M.2 SSD sockets, will satisfy just about anyone looking for a premium Z590 board to build a PC around. It’s not only a great performing board, but it’s easy to overclock as well. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>GIGABYTE Z590 Aorus Xtreme</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/836950397468934184/unknown.png' }}/>
  	<Text style={styles.productAlign}> GIGABYTE has gone for a darker look for Z590 when compared to the Z490 Aorus Xtreme, with an all-black aesthetic that looks clean and stylish. The Z590 Aorus Xtreme WaterForce uses a large custom monoblock, which provides cooling to the CPU and the board's large 20+1 phase power delivery. The general design includes RGB LED lighting, which is installed into the rear panel cover and chipset heatsink </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>AMSI MEG Z490 Godlike</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/836951025755226142/unknown.png' }}/>
  	<Text style={styles.productAlign}> We’d go as far as to say that this is the best z490 board out there right now, with an excellent thermal solution, staggering overclocking performance, easy installation and diagnostic solutions for do-it-yourself-ers, and a solid build. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>GIGABYTE Z490 Gaming X</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/836951055563620403/unknown.png' }}/>
  	<Text style={styles.productAlign}> This entry-level motherboard for gamers has a decent feature set for its price tag, including three PCIe 3.0 x4 M.2 slots, six SATA ports and four memory slots with support for DDR4-4600 and up to 128GB, to start.  </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>GIGABYTE Z390 Designare</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/836951073754841098/unknown.png' }}/>
  	<Text style={styles.productAlign}> The Z390 Designare beats its closest rival on features for the price, has similar overclocking limits to its closest rival but beats it in overclocked DRAM performance, and has at least enough extra value to justify its premium over cheaper boards. We have to consider whether the “workstation replacement” PC market will tolerate a board with mediocre CPU overclocking. But given that there’s so little to gain from overclocking the Core i9-9900K </Text>
	</View>
  );
}
 
function ThreeScreen({ navigation }) {
  return (
 	<View style={styles.bgColor,{flex: 1, backgroundColor:"#a2f5ee", alignItems: 'center'}}>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>AMD Ryzen™ 3 3100</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837157881815498812/unknown.png' }}/>
  	<Text style={styles.productAlign}> The AMD Ryzen 3 3100 is an excellent entry-level CPU that absolutely changes the game when it comes to budget PC builds. With performance that comes within reaching distance of processors that cost twice as much, it makes PC gaming way more affordable. </Text>
	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>AMD Ryzen™ 3 3300X</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837157936043393054/unknown.png' }}/>
  	<Text style={styles.productAlign}> The AMD Ryzen 3 3300X is an amazing budget processor, delivering performance that until now was only available on mid-range or high-end hardware. We imagine that this processor is going to be the best gaming CPU for most people in 2020, and maybe even beyond. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>AMD Ryzen™ 5 3600X</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837157994583031838/unknown.png' }}/>
  	<Text style={styles.productAlign}> The AMD Ryzen 5 3600X is a 6-core, 12-thread processor that's quick enough to hold its own in single-threaded processes. Also has 3.8GHz 3MB Cache up to 4.4GHz with Wraith Spire Cooler. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>AMD Ryzen™ 7 3700X</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837158014418812988/unknown.png' }}/>
  	<Text style={styles.productAlign}> AMD Ryzen™ 7 3700X
AMD Ryzen™ 7 3700X gives dominant gaming and streaming experience with a beautifully balanced design for serious PC enthusiasts. This another impressive release from AMD and its 3rd Generation of Ryzen chips. With it, you're getting 8-cores and 16-threads, with a boost clock of 4.4GHz.</Text>
	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>AMD Ryzen™ 9 3950X</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837158058630447135/unknown.png' }}/>
  	<Text style={styles.productAlign}> The AMD Ryzen 9 3950X is the processor to pick for heavily threaded computer work. It blasts through processing tasks, and can handle high-end gaming, but cheaper Ryzen chips handle gaming just as well.</Text>
	</View>
  );
}
 
function FourScreen({ navigation }) {
  return (
 	<View style={styles.bgColor,{flex: 1, backgroundColor:"#a2f5ee", alignItems: 'center'}}>
  	<Text style={{fontWeight: 'bold', fontSize: 20}}>AMD AM4 ATX – Prime B450 Plus</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837159919886663720/unknown.png' }}/>
  	<Text style={styles.productAlign}> ASUS Prime B450 Series motherboards provide the solid foundation needed for your first build, plus flexibility to grow with your ambitions. We've melded all the good stuff that's packed into AMD Ryzen™ processors with essential ASUS design and engineering, so you benefit from industry-leading technologies — including automated system tuning, comprehensive cooling controls, and immersive onboard audio. When you build with an ASUS Prime B450 Series motherboard, you build smart, easy and affordable.</Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Gigabyte Aorus X570 Master</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837159940032430100/unknown.png' }}/>
  	<Text style={styles.productAlign}> The Gigabyte Aorus X570 Adept is not alone an aesthetically adorable motherboard, with splashes of argent on an atramentous lath meant to accompaniment its RGB lighting. It is additionally able of actuality the centerpiece of an actual able computer. It can handle up to 128GB of DDR4400 RAM, the latest 3rd gen AMD processors and assorted GPUs for anyone absent to approaching affidavit their gaming needs.</Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Asus TUF Gaming B550M-PLUS</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837159961195970578/unknown.png' }}/>
  	<Text style={styles.productAlign}> An advancement from its predecessor, the B450, the Asus TUF Gaming B550M-PLUS boasts not alone am abundant bigger ability band-aid and an abundant cooling solution, but additionally game-ready appearance and military-grade components. Amid those appearance is the AI Noise-Canceling Microphone software, which supports 3.5 mm, USB or Bluetooth headsets, and abounding RGB lighting control.</Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>NZXT N7 B550</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837159982762819584/unknown.png' }}/>
  	<Text style={styles.productAlign}> Looking into an AMD B550 motherboard ability be all-important if you’re advance your AMD Ryzen processor, and the NZXT N7 B550 is an accomplished mid-range option. This gaming motherboard is not alone advised about the B550 chipset, but it comes with congenital Wi-Fi 6E connectivity, article that you’ll be hard-pressed to acquisition in rivalling boards.</Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>MSI Architect TRX40</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837160003751510026/unknown.png' }}/>
  	<Text style={styles.productAlign}> When you’ve got an AMD Threadripper beneath the awning of your PC, you actually charge a barbarian of a motherboard like the MSI Architect TRX40. This is advised and congenital accurately for creators with the best ambitious accretion needs, this motherboard additionally boasts absolutely an affection set. Amid those appearance is the latest PCIe gen4 slots and M.2 connectors, USB3.2 Gen2x2, Wi-Fi 6 and 10G LAN, as able-bodied as MSI’s Frozr Heatsink architecture and Abstruse Ablaze RGB lighting. </Text>
	</View>
  );
}
 
function FiveScreen({ navigation }) {
  return (
 	<View style={styles.bgColor,{flex: 1, backgroundColor:"#a2f5ee", alignItems: 'center'}}>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>GIGABYTE Windforce OC RTX 2070 Super</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://media.discordapp.net/attachments/835876193914978306/836958084198563880/unknown.png' }}/>
  	<Text style={styles.productAlign}> Until Nvidia actually rolls out that Nvidia GeForce RTX 2080 Super, the RTX 2070 Super might just be the Best Nvidia GeForce graphics cards purchase you’ll make. This graphics card is impressive, especially in 1440p gaming and if you’re looking to get on the ray tracing bandwagon. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Asus ROG Strix RTX 3060 Ti OC</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/836958114934292510/unknown.png' }}/>
  	<Text style={styles.productAlign}> The Nvidia GeForce RTX 3060 Ti certainly threatens AMD’s claim to the great value GPU throne with its price to performance ratio. The newest arrival in the RTX 3000 line, this graphics card punches way above its weight class, delivering a performance that could rival that of the RTX 2080 Super while keeping its price tag incredibly affordable for most people. And, that’s with impressive ray tracing included. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>EVGA GeForce RTX 3070 XC3 ULTRA GAMING.</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/836958142075109426/unknown.png' }}/>
  	<Text style={styles.productAlign}>  Before this card, 4K gaming was out of a lot of people’s budget. The RTX 3070, therefore, brings it to the mainstream for the first time, and that’s without you having to compromise on settings for most games. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Asus ROG Strix RTX 3080 O10G Gaming</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/836958160257286154/unknown.png' }}/>
  	<Text style={styles.productAlign}> With the next generation of the best Nvidia GeForce graphics cards, the price of 4K gaming just dropped a few hundred dollars, thanks to the RTX 3080. More than that, it boasts one of the largest generational leaps in GPU history, delivering a 50-80% performance boost over the RTX 2080 and a 20-30% boost over the RTX 2080 Ti, all while keeping the same price point as the RTX 2080. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>MSI Nvidia GeForce RTX 3090 Gaming X Trio</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/836958178474328114/unknown.png' }}/>
  	<Text style={styles.productAlign}> Creative professionals will be blown away by the Nvidia GeForce RTX 3090, especially with the great value it offers. Whether you’re looking for playable gaming performance at 8K or the massive compute performance and copious amount of VRAM you need for 3D rendering – let alone maxing out whatever game you're playing at 4K, this GPU is the one to beat. </Text>
	</View>
  );
}
 
function SixScreen({ navigation }) {
  return (
 	<View style={styles.bgColor,{flex: 1, backgroundColor:"#a2f5ee", alignItems: 'center'}}>
 
  	<Text style={{fontWeight: 'bold', fontSize: 20}}>RAM</Text>
  	<Text style={{fontWeight: 'bold', fontSize: 20}}>Corsair Vengeance LED</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837162023983906856/unknown.png' }}/>
  	<Text style={styles.productAlign}> On top of giving PC builders that extra touch of vibrant lighting, this RAM has robust heat spreaders that maximise cooling for higher overclocking and maximum performance. Corsair’s Vengeance LED DDR4 series also features CL16 latency and whopping 3,466 MHz speeds, so it’s just as fast and responsive as it is aesthetic.</Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>G.Skill Trident Z RGB</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837162045899407400/unknown.png' }}/>
  	<Text style={styles.productAlign}> This is some of the best RAM not just because it’s fast, but the top of every DIMM features a full-spectrum rainbow wave light bar that you can use to match your RGB lighting across your entire system. Trident Z RGB DDR4 RAM features CAS latencies between 14 and 19 which is awesome enough, but with speeds up to 4,266, it’s almost perfect.</Text>
	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Kingston HyperX Fury</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837162069304410153/unknown.png' }}/>
  	<Text style={styles.productAlign}> This Kingston HyperX Fury is auto overclocked memory that won’t empty your wallet. This smart DDR3 or DDR4 RAM auto-detects system components to overclock to the highest speeds possible, optimizing performance for all of Intel’s latest chipsets. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Corsair Dominator Platinum RGB</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837162092251054140/unknown.png' }}/>
  	<Text style={styles.productAlign}> In 2019, it’s been refreshed to include Corsair’s new Capellix RGB LEDs, leading to a much richer and more colorful design. It’s the same high-end RAM we know and love, with speeds up to 3,600 MHz, but the better RGB make the Corsair Dominator Platinum RGB the best RAM around in 2020.  </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Adata Spectrix D80</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837162105403605022/unknown.png' }}/>
  	<Text style={styles.productAlign}> Not only is it available in frequencies up to 5,000MHz, but it’s also liquid cooled, meaning you don’t have to worry about it overheating. The Adata Spectrix D80 is going to be the best RAM for gaming in an RGB-lit cavern. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20,textAlign: 'center',}}>VENGEANCE® LPX 16GB (2 x 8GB) DDR4 DRAM 3600MHz </Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837162121523363880/unknown.png' }}/>
  	<Text style={styles.productAlign}> VENGEANCE LPX memory is designed for high-performance overclocking. The heat spreader is made of pure aluminum for faster heat dissipation, and the custom performance PCB helps manage heat and provides superior overclocking headroom. Each IC is individually screened for peak performance potential. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>CRUCIAL BALLISTIX</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837162138790264842/unknown.png' }}/>
  	<Text style={styles.productAlign}> Crucial Ballistix gaming memory is designed for high-performance overclocking2 and is ideal for gamers and performance enthusiasts looking to push beyond standard limits. With an anodized aluminum heat spreader in black, white, or red and XMP 2.0 support for automatic overclocking, Crucial Ballistix memory is engineered for the latest AMD and Intel platforms. </Text><br></br>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>M.2 Solid State Drive (SSD):</Text>
  	<Text style={{fontWeight: 'bold', fontSize: 20}}>Samsung 970 Evo Plus</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837163724350816266/unknown.png' }}/>
  	<Text style={styles.productAlign}> Samsung is no stranger to creating some of the best SSDs, so when it launched the Samsung 970 Evo Plus with higher speeds and new silicon, even we were surprised. The Samsung 970 Evo Plus is simply one of the fastest drives on the market, but the fact that Samsung is selling it at such a bargain price is just the icing on the cake. </Text>
	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Corsair MP400</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837163780613734430/unknown.png' }}/>
  	<Text style={styles.productAlign}> The Corsair MP400 is a gem. With low prices even for SATA SSDs, the Corsair MP400 is offering a ton of storage so you get the most for your money. But,it’s not a SATA SSD. </Text>
	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Samsung 970 Pro</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837163760798924830/unknown.png' }}/>
  	<Text style={styles.productAlign}> Again, Samsung has been behind some of the best SSDs that have been hitting the streets for years, and even though other manufacturers like Western Digital and Adata are trying their best to give it a run for its money. </Text>
  	 
   	<Text style={{fontWeight: 'bold', fontSize: 20}}>SK Hynix Gold P31</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837163780613734430/unknown.png' }}/>
  	<Text style={styles.productAlign}> The SK Hynix Gold P31 is a fantastic drive, especially at its recently reduced price. It offers incredible speeds on the PCIe 3.0 interface, even coming close to some of the PCIe 4.0-based drives we’ve tested. </Text>
   	<Text style={{fontWeight: 'bold', fontSize: 20}}>Silicon Power US70</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837163806265442314/unknown.png' }}/>
  	<Text style={styles.productAlign}> The Silicon Power US70 brings the price of PCIe 4.0 SSDs down to a more easy-to-stomach level. It’s pleasantly fast for a value-oriented drive, and has serious endurance, but it has some competition that can undercut it in price while jumping ahead in speed. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Power Supply Unit (PSU):</Text>
  	<Text style={{fontWeight: 'bold', fontSize: 20}}>Corsair RM750x</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837167776309313547/unknown.png' }}/>
  	<Text style={styles.productAlign}> Indeed the task's not easy since the existing RMx units only counted three years in production and delivered excellent performance along with dead silent operation.</Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Seasonic Prime Titanium TX-1000</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837167800434556948/unknown.png' }}/>
  	<Text style={styles.productAlign}> Seasonic hit the jackpot with its Prime platform, which starts from Gold efficiency and goes all the way up to Titanium. Several high-impact brands have already used Seasonic's base platform in their own PSUs.</Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>XPG Core Reactor 650W</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837167815562625024/unknown.png' }}/>
  	<Text style={styles.productAlign}> The XPG Core Reactor with 650W capacity has to face strong opponents, such as the Corsair RM650x, the Seasonic GX-650, and the Asus Rog Strix 650. Still, it manages to lead the race, and this is impressive.</Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Corsair AX1600i</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837167830826483762/unknown.png' }}/>
  	<Text style={styles.productAlign}> The Corsair AX1600i was the first desktop PSU to use its cutting-edge power supply technology, but even several years after its initial release, still few other PSUs utilize it. In short, the AX1600i uses a totem-pole PFC converter, utilizing GAN MODFETs, which can offer up to 99 percent efficiency compared to the 96% efficiency levels that the most advanced conventional APFC converters can deliver. </Text>
	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Fractal Design Ion SFX 650 Gold</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837167861151170620/unknown.png' }}/>
  	<Text style={styles.productAlign}> The term 'SFX' isn't so accurate since both Fractal's Ion units follow the unofficial SFX-L form factor SilverStone first introduced. Because of the larger than SFX depth—by 30mm—depth, SFX-L units allow for larger cooling fans and better airflow. </Text>
	</View>
  );
}
 
function SevenScreen({ navigation }) {
  return (
 	<View style={styles.bgColor,{flex: 1, backgroundColor:"#a2f5ee", alignItems: 'center'}}>
  	<Text style={{fontWeight: 'bold', fontSize: 20}}>MSI Optix G32C4</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837305004444352583/unknown.png' }}/>
  	<Text style={styles.productAlign}> Curved Gaming display (1500R) – The best gameplay immersion.
165Hz Refresh Rate – Real smooth gaming.
1ms response time - eliminate screen tearing and choppy frame rates.
Wide Color Gamut - Game colors and details will look more realistic and refined, to push game immersion to its limits.
AMD FreeSync – prevent screen tearing.
Anti-Flicker and Less Blue Light – game even longer and prevent eye strain and fatique.
Frameless design – Ultimate gameplay experience.
178° wide view angle. </Text>
	 
     <Text style={{fontWeight: 'bold', fontSize: 20}}>TUF Gaming VG249Q1A</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837305019686453268/unknown.png' }}/>
  	<Text style={styles.productAlign}> 23.8-inch Full HD (1920x1080) IPS gaming monitor with ultrafast 165Hz refresh rate designed for professional gamers and immersive gameplay
ASUS Extreme Low Motion Blur (ELMB ™) technology enables a 1ms response time (MPRT) together with Adaptive-sync, eliminating ghosting and tearing for sharp gaming visuals with high frame rates
FreeSync™ Premium technology to eliminate screen tearing and choppy frame rates
Shadow Boost enhances image details in dark areas, brightening scenes without over-exposing bright areas. Supports both Adaptive-Sync with NVIDIA GeForce* graphics cards and FreeSync with AMD Radeon graphics cards *Compatible with NVIDIA GeForce GTX 10 series, GTX 16 series, RTX 20 series and newer graphics card  </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>ASUS VA24DCP Eye Care Monitor</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837305035271700550/unknown.png' }}/>
  	<Text style={styles.productAlign}> 23.8-inch Full HD (1920x1080) LED backlight display with IPS 178° wide viewing angle panel
Up to 75Hz refresh rate with Adaptive-Sync/FreeSync™ technology to eliminate tracing and ensure crisp and clear video playback
USB-C port supports DisplayPort signal and 65W power delivery via only one cable
VESA wall-mountable to save on desktop space
ASUS Eye Care monitors feature TÜV Rheinland-certified Flicker-free and Low Blue Light technologies to ensure a comfortable viewing experience. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>ASUS VP249QGR Gaming Monitor</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837305049825673226/unknown.png' }}/>
  	<Text style={styles.productAlign}> 23.8 inch Full HD (1920x1080) LED backlight display with IPS 178° wide viewing angle panel
Up to 144Hz refresh rate with Adaptive-Sync (FreeSync™) technology to eliminate tracing and ensure crisp and clear video playback
ASUS Extreme Low Motion Blur (ELMB™) technology enables a 1ms response time (MPRT) together, eliminating ghosting and tearing for sharp gaming visuals with high frame rates.
Extensive connectivity including DisplayPort, HDMI and D-sub ports
VESA wall-mountable to save on desktop space
Supports both Adaptive-Sync with NVIDIA GeForce* graphics cards and FreeSync with AMD Radeon graphics cards *Compatible with NVIDIA GeForce GTX 10 series, GTX 16 series, RTX 20 series and newer graphics cards. </Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>ROG Swift 360Hz PG259QNR</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837305066884300810/unknown.png' }}/>
  	<Text style={styles.productAlign}> ASUS ROG SWIFT 360Hz PG259QNR eSports NVIDIA® G-SYNC® Gaming Monitor – 24.5 inch FHD (1920 x 1080), NVIDIA Reflex Latency Analyzer, 360 Hz, Fast IPS, 1 ms (GTG), ROG Desk Mount Kit
24.5-inch FHD (1920 x 1080) fast IPS gaming monitor with 360 Hz refresh rate designed for professional esports gamers
NVIDIA® G-SYNC® processor provides smooth, tear-free gaming at refresh rates up to 360 Hz
NVIDIA® Reflex Latency Analyzer gives competitive gamers an accurate measurement of system latency for the first time.
ASUS Fast IPS technology enables a 1 ms response time (GTG) for sharp gaming visuals with high frame rates.
Include a ROG desk mount kit that can clamp to the edge of most any flat work surface. </Text>
	</View>
  );
}
 
function EightScreen({ navigation }) {
  return (
 	<View style={styles.bgColor,{flex: 1, backgroundColor:"#a2f5ee", alignItems: 'center'}}>
  	<Text style={{fontWeight: 'bold', fontSize: 20}}>Mechanical Keybaord</Text><br></br>
  	<Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center',}}>AKKO 3068 World Tour Tokyo Bluetooth</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837325512913321994/unknown.png' }}/>
  	<Text style={styles.productAlign}>Beautiful Cherry Blossom Design inspired by the sight of cherry blossoms of Mount Fuji. Keycaps are made of 85% PBT materials with 68 keys + 11 Function Keys.
68 key compact layout saves more room on your desk.
2. 85% content PBT keycaps and Made by five – sided thermal sublimation, color bright and not easy to fade off.
3. Equipped with blue-tooth and cable dual mode, it can connect to mobile phone, tablet computer, built-in lithium battery, easy to carry, more powerful function;
4. Seperately Match Device1 ( FN + E ) , Device2 ( FN + R ) , Device3 ( FN + T ) for the fist
Using, Signal Indicator Flashes when in matching condition, Light out Afted Match Completed;
Long Press FN + TAB for 3S — Change Modes Between bluetooth and USB Wired;
Long Press FN + E / FN + R / FN + T for the Devices Changing</Text>

<Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center',}}>Monet’s Pond 3108 2nd Generationn Mechanical Keyboard</Text>
<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837325769222389801/unknown.png' }}/> Switch  Akko 2nd Gen <Text>Pink/Akko 2nd Gen Blue/Akko 2nd Gen Orange/Gateron Yellow/Gateron Orange
Interface USB Type C
Macro Akko Macro V1.0
N-Key Rollover  Supported
Disable Winlock Supported
Backlit No backlit/Support Led Mod by users with preserved LED slots
Model 3108
Dimensions  440*140*41mm
Weight  Approximately 1.2KG
Material  PBT Material
Profile OEM
Printing Technology Dye-Sublimation
Side-Printed  N/A </Text>
  	<Text style={{fontWeight: 'bold', fontSize: 20}}>Royal Kludge61</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837327880522170388/unknown.png' }}/>
  	<Text style={styles.productAlign}> Royal Kludge (RK)
Model: RK61 RGB Version
Color: Black or White
Material: ABS
Switch: Brown, Red, Blue Switch
Connection: Bluetooth + USB Wired Dual Mode
Layout: 61 Key 60% Keyboard Layout
Backlit: RGB Backlit
9Dimension: 290*100*35mm</Text>
 	 
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Rakk Lam Ang Pro</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837328506903855194/unknown.png' }}/>
  	<Text style={styles.productAlign}>Windows and Apple Compatible Keyboard
Bluetooth 3.0 wireless Gaming Mechanical keyboard
2000mAh battery
48hours battery before drain
Modular TKL Mechanical keyboard
Ergonomic Designed Keyboard,
Anti Ghosting & N- Key Rollover
Over 16 Million Colors
ABS Double Shot Injection Keycaps
87 key Standard QWERTY Layout (ANSI)
1000Hz Ultra Polling Rate
USB pass-through Port
Type C Braided Cable
Fully Modular
Dedicated Volume and Brightness Control</Text>
	 
     <Text style={{fontWeight: 'bold', fontSize: 20}}>Rakk Lam Ang Lite</Text>
  	<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837328691713015858/unknown.png' }}/>
  	<Text style={styles.productAlign}>Windows and Apple Compatible Keyboard
Modular TKL Mechanical keyboard
Ergonomic Designed Keyboard,
Anti Ghosting & N- Key Rollover
Over 16 Million Colors
ABS Double Shot Injection Keycaps
87 key Standard QWERTY Layout (ANSI)
1000Hz Ultra Polling Rate
50M Click Lifespan
USB pass-through Port
Multimedia keys: Support w/FN key
Type C Braided Cable
Fully Modular
Dedicated Volume and Brightness Control</Text><br></br>
 
<Text style={{fontWeight: 'bold', fontSize: 20}}>Gaming Mouse</Text>
<Text style={{fontWeight: 'bold', fontSize: 20}}>Logitech G502</Text>
<Image style={styles.tinyLogo} source={{uri:'https://media.discordapp.net/attachments/835876193914978306/837329412281860107/unknown.png' }}/>
<Text style={styles.productAlign}> Height: 132 mm Width: 75 mm Depth: 40 mm Weight: 121 g, mouse only Optional extra weights: up to 18 g (5x3.6 g) Cable length: 2.10 m TRACKING: Sensor: HERO™
Resolution: 100 – 25,600 dpi Zero smoothing/acceleration/filtering Max. acceleration: > 40 G2Tested on Logitech G240 Gaming Mouse Pad Max. speed: > 400 IPS3Tested on Logitech G240 Gaming Mouse Pad ESPONSIVENESS: USB data format: 16 bits/axis USB report rate: 1000 Hz (1ms) Microprocessor: 32-bit ARM
DURABILITY: PTFE Feet: > 250 kilometers4Tested on Logitech G240 Gaming Mouse Pad OTHER FEATURES: Onboard memory: Up to 5 profiles (requires firmware 127.1.7)
LIGHTSYNC RGB: 1 zone USB port (Optional) Internet access for Logitech G HUB 2-Year Limited Hardware Warranty</Text>

<Text style={{fontWeight: 'bold', fontSize: 20}}>Logitech G102</Text>
<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837329775483158558/unknown.png' }}/>
<Text style={styles.productAlign}> Height: 116.6 mm Width: 62.15 mm Depth: 38.2 mm Weight: 85 g, (mouse only) Cable Length: 2.1 m TECHNICAL SPECIFICATIONS LIGHTSYNC RGB lighting
6 programmable buttons Resolution: 200 – 8,000 DPI RESPONSIVENESS: USB data format: 16 bits/axis, USB report rate: 1000 Hz (1ms) Microprocessor: 32-bit ARM
Black : 910-005802 White : 910-005803</Text>

<Text style={{fontWeight: 'bold', fontSize: 20}}>Razer Viper Mini</Text>
<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837329960573992970/unknown.png' }}/>
<Text style={styles.productAlign}> Sensor Type  Optical Sensor Model  PixArt 3359 Sensitivity 8,500 CPI Polling Rate  1,000 Hz (1ms) Lift-off Distance  3mm Programmable Buttons  6
LED Zones 2 programmable RGB zones Cable Length 6.5 feet (2m) Measurements (LxWxH)  4.66 x 2.11 x 1.51 inches (118.3 x 53.5 x 38.3mm)
weight  0.13 pounds (61g) </Text>

<Text style={{fontWeight: 'bold', fontSize: 20}}>Rakk Kaptan</Text>
<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837330298718519336/unknown.png' }}/>
<Text style={styles.productAlign}>Pixart 3389 Sensor Adjustable Lift-off Distance Pracord cable 1.8M Adjustable Polling Rate (1000hz MAX) Lightweight 78±5g
Ergonomic Design Huano Switches 20 Million Clicks </Text>

<Text style={{fontWeight: 'bold', fontSize: 20}}>Rakk Talan</Text>
<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837330508202901504/unknown.png' }}/>
<Text style={styles.productAlign}> Size: 120x63.5mmx39mm
Weight: 76g ± (580mAh)
Switch: Huano Blue 20M
Sensor: PAW3335Max
DPI: 400-800-1200-2400-3200-6400
IPS: 400ipsAcceleration: 40g(Max)
Polling Rate: 125-250-500(default)-1000HzInterface: USB 2.0
Battery Type: Li-on Polymer Battery
Battery capacity: 580mAh
Default working time (1time charge): 120hrs ± (125Hz)-48hrs ± (1000hz)
Charging time: 3hrs ± </Text><br></br>

<Text style={{fontWeight: 'bold', fontSize: 20}}>Gaming Headset</Text>
<Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center',}}>HyperX Cloud Alpha S Gaming Headset</Text>
<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837330686255956030/unknown.png' }}/>
<Text style={styles.productAlign}> The HyperX Cloud Alpha’S builds upon the groundbreaking Cloud Alpha and features HyperX virtual 7.1 surround sound1. With the included audio control mixer, you can activate the surround sound and adjust the game audio and chat balance without having to go into any menus. Bass adjustment sliders have been added to the ear cups so you can personalize your audio. The Cloud Alpha S still features the dual-chamber driver system which reduces distortion and provides clearer sound, as well as signature HyperX comfort afforded by the memory foam ear cushions, which have been upgraded with extra breathable leatherette. </Text>

<Text style={{fontWeight: 'bold', fontSize: 20}}>Logitech G733</Text>
<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837330700788301854/unknown.png' }}/>
<Text style={styles.productAlign}> G733 LIGHTSPEED Wireless RGB Gaming Headset
Reversible soft headband (attached)
Detachable microphone
LIGHTSPEED wireless receiver (USB-A)
USB-C to USB-A charging cable </Text>

<Text style={{fontWeight: 'bold', fontSize: 20}}>Steelseries arctis 5</Text>
<Image style={styles.tinyLogo} source={{uri:'https://cdn.discordapp.com/attachments/835876193914978306/837330713681985586/unknown.png' }}/>
<Text style={styles.productAlign}>Surround Sound RGB Gaming Headset
Best mic in gaming: the Discord-certified ClearCast bidirectional microphone
Hear stunning detail in all games with award-winning Arctis sound
Next-generation DTS Headphone:X v2.0 surround sound
Balance game and chat audio with the USB ChatMix dial
Prism RGB illuminated earcups </Text>
	</View>
  );
}
 
const styles = StyleSheet.create({
  tinyLogo: {
	width: 300,
	height: 200,
	justifyContent: 'center',
	alignItems: 'center',
  },
 
  bgColor:{
	backgroundColor:"#81c8eb",
  },
  HomeBtn:{
	textAlign: 'center',
	paddingBottom: '5%',
    color: 'blue',
  },
  GreetingText:{
	color:"blue",
	fontSize:30,
	color:"red",
	textAlign:"center",
	marginTop: 25
  },
  cardRounded:{
	height: 155,
	backgroundColor: "#fca311",
	marginLeft: 15,
	marginRight: 15,
	marginTop: 4,
	marginBottom: 9,
	borderRadius: 12,
	shadowColor: "#000",
	shadowOffset:{
  	width: 5,
  	height: 6
	},
	shadowOpacity: 0.37,
	shadowRadius: 7.49,
	elevation: 12,
	borderRadius: 5,
	margin: 5,
	padding: 15
  },
  inputFields:{
  marginTop: '2%',
  backgroundColor: 'white',
  borderRadius: 50,
  paddingLeft: 5,
  width: '90vw'
  },
  productAlign:{
      textAlign: 'center',
      paddingLeft: 30,
      paddingRight: 30,
  }
});
 
 function SplashScreen({navigation}){
     return(
   	 <TouchableOpacity onPress={() => navigation.navigate('Login')}>
   		 <View style={{
   				 justifyContent: 'center',  
   				 alignItems: 'center',
   				 backgroundColor:"#81c8eb",
   			 }}>
   			 <ImageBackground style={{
   						 width:300,
   						 height:300,
   						 }} source={{uri:'https://svgshare.com/i/Wq4.svg' }}>
   				 <Image style={{
   								 width: 300,
   								 height: 300,
   							 }} source={{uri:'https://svgshare.com/i/Wpb.svg' }}/>
   			 </ImageBackground>
   			 <Text style={{
   					 color: 'white',
   					 textAlign: 'center',
   					 fontSize: 30,
   					 fontWeight: 'bold'
   				 }}>
   				 LinTech<br/>PC<br/>Intelligence<br/>-<br/>
   			 </Text>
   			 <Text style={{
   					 color: 'white',
   					 textAlign: 'center',
   					 fontSize: 24,
   			 }}>
   				 Customize your epic<br/>dream PC rig with<br/>intelligence
   			 </Text>
   		 </View>
   	 </TouchableOpacity>
     );
 }
 
function App() {
  return (
	<NavigationContainer>
   	 <Stack.Navigator initialRouteName="Splash">
   	 <Stack.Screen name="Splash" component={SplashScreen}/>
    	<Stack.Screen name="Login" component={LoginScreen} />
    	<Stack.Screen name="SignUp" component={SignUpScreen} />
    	<Stack.Screen name="Home" component={HomeScreen} />
 
    	<Stack.Screen name="About" component={AboutScreen} />
    	<Stack.Screen name="Contact Information" component={UserInfoScreen} />
    	<Stack.Screen name="Intel Processors" component={OneScreen} />
    	<Stack.Screen name="Intel Motherboard" component={TwoScreen} />
    	<Stack.Screen name="AMD Ryzen Processors" component={ThreeScreen} />
    	<Stack.Screen name="AMD Motherboard" component={FourScreen} />
    	<Stack.Screen name="Video Card / Graphics Card" component={FiveScreen} />
    	<Stack.Screen name="Other Components" component={SixScreen} />
    	<Stack.Screen name="Monitors" component={SevenScreen} />
    	<Stack.Screen name="Peripherals" component={EightScreen} />
  	</Stack.Navigator>
	</NavigationContainer>
  );
}
 
export default App;
 




