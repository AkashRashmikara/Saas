angular.module('myApp', []).controller('myCtrl', function($scope, $http) {
    $http.get('/api/page').then(function(response) {
      $scope.page = response.data;
    });
  
    $scope.showMenu = function() {
      var navLinks = document.getElementById("navLinks");
      navLinks.style.right = "0";
    };
  
    $scope.hideMenu = function() {
      var navLinks = document.getElementById("navLinks");
      navLinks.style.right = "-200px";
    };
  });
  // Academic Qualification
function addNewAQ() {
  let newNode = document.createElement("textarea"); document.getElementById('')
  newNode.classList.add("form-control");
  newNode.classList.add("eqFeild");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  let AQ = document.getElementById('AddAQ'); document.getElementById('')
  let addAQbtn = document.getElementById('aqAddbtn'); document.getElementById('')
  AQ.insertBefore(newNode, addAQbtn);
}
// Work Experience
function addNewWE() {
  let newNode = document.createElement("textarea"); document.getElementById('')
  newNode.classList.add("form-control");
  newNode.classList.add("weFeild");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  let weOb = document.getElementById('we'); document.getElementById('')
  let webtn = document.getElementById('weAddbtn'); document.getElementById('')
  weOb.insertBefore(newNode, webtn);
}
// Awards/Scholarship/Achievments
function Awardsfun() {
  let newNode = document.createElement("textarea"); document.getElementById('')
  newNode.classList.add("form-control");
  newNode.classList.add("aFeild");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  let Awards = document.getElementById('Awards'); document.getElementById('')
  let addAbtn = document.getElementById('Addbtn'); document.getElementById('')
  Awards.insertBefore(newNode, addAbtn);
}
// Projects
function AddProject() {
  let newNode = document.createElement("textarea"); document.getElementById('')
  newNode.classList.add("form-control");
  newNode.classList.add("pFeild");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  let p = document.getElementById('pro'); document.getElementById('')
  let pAddbtn = document.getElementById('pAddbtn'); document.getElementById('')
  p.insertBefore(newNode, pAddbtn);
}

// Generate CV
function GenerateCV() {
  console.log("Generate CV button clicked");
  let nameFeild = document.getElementById('nameFeild').value;
  let eduFeild = document.getElementById('eduFeild').value;
  let contactFeild = document.getElementById('contactFeild').value;
  let emailFeild = document.getElementById('emailFeild').value;
  let dobFeild = document.getElementById('dobFeild').value;
  let addressFeild = document.getElementById('addressFeild').value;
  let interestFeild = document.getElementById('interestFeild').value;
  let gitFeild = document.getElementById('gitFeild').value;
  let linkedinFeild = document.getElementById('linkedinFeild').value;
  let fbFeild = document.getElementById('fbFeild').value;
  let instaFeild = document.getElementById('instaFeild').value;
  let twitterFeild = document.getElementById('twitterFeild').value;

  let eqFeild = document.getElementsByClassName('eqFeild');
  let weFeild = document.getElementsByClassName('weFeild');
  let aFeild = document.getElementsByClassName('aFeild');
  let pFeild = document.getElementsByClassName('pFeild');

  let comFeild = document.getElementById('comFeild').value;
  let softFeild = document.getElementById('softFeild').value;
  let addFeild = document.getElementById('addFeild').value;
  let langFeild = document.getElementById('langFeild').value;


  // Take All id's from CV-Template
  document.getElementById('nameT').innerHTML = nameFeild;
  document.getElementById('BioT').innerHTML = eduFeild;
  document.getElementById('contactT').innerHTML = contactFeild;
  document.getElementById('emailT').innerHTML = emailFeild;
  document.getElementById('dobT').innerHTML = dobFeild;
  document.getElementById('addressT').innerHTML = addressFeild;
  document.getElementById('gitT').innerHTML = `<a href="${gitFeild}" target="_blank"><img src="icons/github.svg" alt=""></a>`;
  document.getElementById('linkT').innerHTML = `<a href="${linkedinFeild}" target="_blank" ><img src="icons/linkedin.svg" alt=""></a>`;
  document.getElementById('instaT').innerHTML = `<a href="${instaFeild}" target="_blank" ><img src="icons/instagram.svg" alt=""></a>`;
  document.getElementById('fbT').innerHTML = `<a href="${fbFeild}" target="_blank"><img src="icons/facebook.svg" alt=""></a>`;
  document.getElementById('twitterT').innerHTML = `<a href="${twitterFeild}" target="_blank" ><img src="icons/twitter.svg" alt=""></a>`;
  document.getElementById('aiT').innerHTML = interestFeild;

  //Class -> Academic
  let str = "";
  for (let e of eqFeild) {
      str = str + ` <li>${e.value}</li>`;
  }
  document.getElementById('aqT').innerHTML = str;

  //Work exper
  let por = "";
  for (let e of weFeild) {
      por = por + `<li>${e.value}</li>`;
  }
  document.getElementById('weT').innerHTML = por;

  //award
  let a = "";
  for (let e of aFeild) {
      a = a + `<li>${e.value}</li>`;
  }
  document.getElementById('awT').innerHTML = a;

  //Projects
  let pro = "";
  for (let e of pFeild) {
      pro = pro + `<li>${e.value}</li>`;
  }
  document.getElementById('projectT').innerHTML = pro;

  //Skills
  document.getElementById('clT').innerHTML = comFeild;
  document.getElementById('spT').innerHTML = softFeild;
  document.getElementById('acT').innerHTML = addFeild;
  document.getElementById('lkT').innerHTML = langFeild;

  // Setting Up Profile photo
  let file = document.getElementById('picFeild').files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = function () {
      // console.log(reader.result);
      document.getElementById('mypic').src = reader.result;
  }
  function previewImage() {
      let fileInput = document.getElementById('picFeild');
      let imagePreview = document.getElementById('imagePreview');
  
      if (fileInput.files.length > 0) {
          let file = fileInput.files[0];
          let reader = new FileReader();
  
          reader.onload = function () {
              imagePreview.src = reader.result;
              imagePreview.style.display = 'block'; 
          };
  
          reader.readAsDataURL(file);
      } else {
          imagePreview.src = '';
          imagePreview.style.display = 'none';
      }
  }
  


  document.getElementById('cv-form').style.display = 'none';
  document.getElementById('footer').style.display = 'none';
  document.getElementById('nav').style.display = 'none';
  document.getElementById('cv-template').style.display = 'block';

}

// Print CV
function printCV() {
  window.print();
}

// function printCV() {
//     document.getElementById('printT').style.display = 'none';
//     const element = document.body;
//     const options = {
//       margin: 0,
//       filename: 'your_filename.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };

//     html2pdf().set(options).from(element).save();
//   }



//custom _CV

document.querySelector('#page').contentEditable = true;

defaultTemplateVars = [ "fontDroid" , "caseNormal" , "titleRuled" , "ruleAbove" , "imageShow" , "rollShow" , "course1" , "tableShow" , "edyearFirst" , "experience1" , "projects1" ]

$('.toggle-option').click(function(){
	toggleType = $(this).attr('data-toggle');
	toggleValue = $(this).attr('id');
	if(!$(this).hasClass('multi-select'))
	{
		if(!$(this).hasClass('selected'))
		{
			$('.toggle-option',$(this).parent()).removeClass('selected');
			$(this).addClass('selected');
			changeTemplate(toggleType,toggleValue);
		}
	}
	else
	{
		if($(this).hasClass('selected'))
			$(this).removeClass('selected');
		else
			$(this).addClass('selected');
		changeTemplate(toggleType,toggleValue);
	}
});

$('input[name="sectionToggle"]').change(function(){
	toggleSection($(this).val(),$(this).is(':checked'));
});


function template(value)
{
	if(value=='default')
	{
		$('#defaultTemplateBtn').removeClass('btn-default').addClass('btn-danger');
		$('#customTemplateBtn').removeClass('btn-danger').addClass('btn-default');
		$('#customTemplateOptions').hide();
		for(i=0;i<defaultTemplateVars.length;i++)
			$('#'+defaultTemplateVars[i]).click();
	}
	else
	{
		$('#customTemplateBtn').removeClass('btn-default').addClass('btn-danger');
		$('#defaultTemplateBtn').removeClass('btn-danger').addClass('btn-default');
		$('#customTemplateOptions').show();
	}
}

function toggleSection(sectionName,toggleState)
{
	if(toggleState==true)
		$('input[value="'+sectionName+'"]').attr('checked','true');
	else
		$('input[value="'+sectionName+'"]').removeAttr('checked');
	$('#'+sectionName).toggle();
}

function changeTemplate(toggleType,toggleValue)
{
	switch(toggleType)
	{
		case 'minor':
			if(toggleValue=='minorShow')
			{
				$('#contentMinor').show();
				$('#image_box').css('margin-top','35px');
			}
			else
			{
				$('#contentMinor').hide();
				$('#image_box').css('margin-top','25px');
			}
			break;
		case 'contact':
			if(toggleValue=='contact3')
			{
				$('#contactLink1').hide();
				$('#contactLink2').hide();
			}
			else if(toggleValue=='contact4')
			{
				$('#contactLink1').show();
				$('#contactLink2').hide();
			}
			else
			{
				$('#contactLink1').show();
				$('#contactLink2').show();
			}
			break;
		case 'margin':
			if(toggleValue=='margin1')
				$('#page').css('padding','0.2cm 1cm 1cm 1cm');
			else if(toggleValue=='margin2')
				$('#page').css('padding','0.2cm 1.1cm 1cm 1.1cm');
			else if(toggleValue=='margin3')
				$('#page').css('padding','0.2cm 1.2cm 1cm 1.2cm');
			else if(toggleValue=='margin4')
				$('#page').css('padding','0.2cm 1.3cm 1cm 1.3cm');
			else if(toggleValue=='margin5')
				$('#page').css('padding','0.2cm 1.4cm 1cm 1.4cm');
			else if(toggleValue=='margin6')
				$('#page').css('padding','0.2cm 1.5cm 1cm 1.5cm');
			break;
		case 'line':
			if(toggleValue=='line1')
				$('#page').css('line-height','1.1em');
			else if(toggleValue=='line2')
				$('#page').css('line-height','1.2em');
			else if(toggleValue=='line3')
				$('#page').css('line-height','1.3em');
			else if(toggleValue=='line4')
				$('#page').css('line-height','1.4em');
			else if(toggleValue=='line5')
				$('#page').css('line-height','1.5em');
			else if(toggleValue=='line6')
				$('#page').css('line-height','1.6em');
			break;
		case 'column':
			if(toggleValue=='column1')
				$('.table tbody tr td:nth-child(1)').toggleClass('text-center');
			else if(toggleValue=='column2')
				$('.table tbody tr td:nth-child(2)').toggleClass('text-center');
			else if(toggleValue=='column3')
				$('.table tbody tr td:nth-child(3)').toggleClass('text-center');
			else if(toggleValue=='column4')
				$('.table tbody tr td:nth-child(4)').toggleClass('text-center');
			break;

		case 'font':
			if(toggleValue=='fontVerdanaSans')
				$('#page').removeClass('droid').removeClass('roboto').removeClass('verdana-serif').addClass('verdana-sans');
			else if(toggleValue=='fontVerdanaSerif')
				$('#page').removeClass('verdana-sans').removeClass('droid').removeClass('roboto').addClass('verdana-serif');
			else if(toggleValue=='fontRoboto')
				$('#page').removeClass('verdana-serif').removeClass('verdana-sans').removeClass('droid').addClass('roboto');
			else if(toggleValue=='fontDroid')
				$('#page').removeClass('roboto').removeClass('verdana-serif').removeClass('verdana-sans').addClass('droid');
			break;
		case 'case':
			if(toggleValue=='caseNormal')
				$('.section-title').removeClass('uppercase');
			else
				$('.section-title').addClass('uppercase');
			break;
		case 'title':
			if(toggleValue=='titleRuled')
			{
				$('.section-title').removeClass('shaded');
				$('.section-title').addClass('ruled');
			}
			else
			{
				$('.section-title').removeClass('ruled');
				$('.section-title').addClass('shaded');
			}
			break;
		case 'rule':
			if(toggleValue=='ruleAbove')
			{
				$('.section-title').removeClass('rule-below');
				$('.section-title').addClass('rule-above');
			}
			else
			{
				$('.section-title').removeClass('rule-above');
				$('.section-title').addClass('rule-below');
			}
			break;

		case 'image':
			if(toggleValue=='imageShow')
			{
				$('#Imageview').show();
				$('#info').css('margin-left','0px');
			}
			else
			{
				$('#Imageview').hide();
				$('#info').css('margin-left','20px');
			}
			break;
		case 'roll':
			if(toggleValue=='rollShow')
			{
				$('#contentRoll').show();
				$('#info').css('margin-top','0px');
			}
			else
			{
				$('#contentRoll').hide();
				$('#info').css('margin-top','10px');
			}
			break;
		case 'course':
			if(toggleValue=='course1')
			{
				$('#contentBranch').hide();
				$('#contentCourse').text('B.Tech - '+$('#contentBranch').text());
			}
			else
			{
				$('#contentBranch').show();
				$('#contentCourse').text('B.Tech undergraduate');
			}
			break;
		case 'table':
			if(toggleValue=='tableShow')
			{
				$('#educationTable').removeClass('borderless');
				$('#educationTable').addClass('customBordered');
			}
			else
			{
				$('#educationTable').removeClass('customBordered');
				$('#educationTable').addClass('borderless');
			}
			break;
		case 'edyear':
			if(toggleValue=='edyearFirst')
			{
				$("#educationTable tr").each(function () {
					$(this).find("td").eq(0).before($(this).find("td").eq(3));
				});
				var temp = document.getElementById('column4').className;
				document.getElementById('column4').className = document.getElementById('column3').className;
				document.getElementById('column3').className = document.getElementById('column2').className;
				document.getElementById('column2').className = document.getElementById('column1').className;
				document.getElementById('column1').className = temp;
			}
			else
			{
				$("#educationTable tr").each(function () {
					$(this).find("td").eq(3).after($(this).find("td").eq(0));
				});
				var temp = document.getElementById('column1').className;
				document.getElementById('column1').className = document.getElementById('column2').className;
				document.getElementById('column2').className = document.getElementById('column3').className;
				document.getElementById('column3').className = document.getElementById('column4').className;
				document.getElementById('column4').className = temp;
			}
			break;
		case 'experience':
			if(toggleValue=='experience1')
			{
				$("#sectionExperience .title , #sectionExperience .time").css('display','inline-block');
				$("#sectionExperience .time").addClass('right').removeClass('tab');
				$("#sectionExperience .link").show();
			}
			else
			{
				$("#sectionExperience .title , #sectionExperience .time").css('display','block');
				$("#sectionExperience .time").removeClass('right').addClass('tab');
				$("#sectionExperience .link").hide();
			}
			break;
		case 'projects':
			if(toggleValue=='projects1')
			{
				$("#sectionProjects .title , #sectionProjects .time").css('display','inline-block');
				$("#sectionProjects .time").addClass('right').removeClass('tab');
				$("#sectionProjects .mentor , #sectionProjects .link").show();
			}
			else
			{
				$("#sectionProjects .title , #sectionProjects .time").css('display','block');
				$("#sectionProjects .time").removeClass('right').addClass('tab');
				$("#sectionProjects .mentor , #sectionProjects .link").hide();
			}
			break;
	}
}

function insertList()
{
	node = getSelectionContainerElement();
	var ul = document.createElement("ul");
	ul.className = 'decimal';
	ul.style.marginLeft = '0px';
	ul.innerHTML = "<li>Sub-point 1 : Description</li><li>Sub-point 2 : Description</li>";
	insertAfter(node,ul);
}

function decreaseIndent()
{
	node = getSelectionContainerElement();
	while(node.tagName!='UL')
		node = node.parentNode;
	node.style.paddingLeft = parseInt(window.getComputedStyle(node).getPropertyValue("padding-left"))-5;
}

function increaseIndent()
{
	node = getSelectionContainerElement();
	while(node.tagName!='UL')
		node = node.parentNode;
	node.style.paddingLeft = parseInt(window.getComputedStyle(node).getPropertyValue("padding-left"))+5;
}

function changeListStyle(value)
{
	node = getSelectionContainerElement();
	while(node.tagName!='UL')
		node = node.parentNode;
	node.className = value;

}


function getSelectionContainerElement()
{
	var range, sel, container;
	if (document.selection && document.selection.createRange)
	{
		range = document.selection.createRange();
		return range.parentElement();
	}
	else if (window.getSelection)
	{
		sel = window.getSelection();
		if (sel.getRangeAt)
		{
			if (sel.rangeCount > 0)
				range = sel.getRangeAt(0);
		}
		else
		{
			range = document.createRange();
			range.setStart(sel.anchorNode, sel.anchorOffset);
			range.setEnd(sel.focusNode, sel.focusOffset);
			if (range.collapsed !== sel.isCollapsed)
			{
				range.setStart(sel.focusNode, sel.focusOffset);
				range.setEnd(sel.anchorNode, sel.anchorOffset);
			}
		}
		if (range)
		{
			container = range.commonAncestorContainer;
			return container.nodeType === 3 ? container.parentNode : container;
		}
	}
}

function insertAfter(referenceNode,newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}