function myFunction(){
	var today=new Date()-1;
	if(document.getElementById('PRINTTITLE').innerHTML=='Register Application'){
		document.getElementsByName('monthdateReceived')[0].value=today.getMonth()+1;
		document.getElementsByName('datedateReceived')[0].value=today.getDate();
		document.getElementsByName('yeardateReceived')[0].value=today.getFullYear();
		document.getElementsByName('appModeCd')[0].value='WI';
		document.getElementsByName('firstName')[0].value='Suzanne';
		document.getElementsByName('lastName')[0].value='Shaw';
		document.getElementById('button2');      
    	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Register Application - Address'){
		document.getElementsByName('streetNumber')[0].value='101';
		document.getElementsByName('streetName2')[0].value='Richmond';
		document.getElementsByName('strType')[0].value='AV';
		document.getElementsByName('dwellingType')[0].value='APT';
		document.getElementsByName('aptNumber')[0].value='101';
		document.getElementsByName('city')[0].value='Helena';
		document.getElementsByName('zipCode5')[0].value='59601';
		document.getElementsByName('residencyCounty')[0].value='Lewis and Clark - 25';
		document.getElementById('form1dynaLocalSubmitButton').click();
		document.getElementById('actionButtonNext').click();
	}   
	if(document.getElementById('PRINTTITLE').innerHTML=='Register Individual - Individual'){
		document.getElementById('gender').value='F';
		document.getElementById('monthdateOfBirth1').value='09';
		document.getElementById('datedateOfBirth1').value='22';
		document.getElementById('yeardateOfBirth1').value='1985';
		document.getElementById('ssn1ssn').value=Math.floor(Math.random() * 899+100);
		document.getElementById('ssn2ssn').value=Math.floor(Math.random() * 99+10);
		document.getElementById('ssn3ssn').value=Math.floor(Math.random() * 8999+1000);
		if(document.getElementsByName('firstName')[0].value!==''){
			document.getElementById('actionButtonNext').click();
		}
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='File Clearance - Results'){
		document.getElementById('viewAssociatedCases').value='N';
		document.getElementById('establishNewIndividual').value='Y';
		document.getElementById('button2').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Register Individual - Summary'){
		document.getElementById('button4').click();
	}	
	if(document.getElementById('PRINTTITLE').innerHTML=='Register Program - Program'){
		document.getElementById('maFormCd').value='HCS-250';
		//document.getElementById('cash').checked;
		//document.getElementById('SNAP').checked;		
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Register Program - Expedited Screening'){
		document.getElementById('expeditedCountableGrossIncome').value='200';
		//setTimeout(function() {
		document.getElementById('expeditedCountableResources').value='200';
		document.getElementById('expeditedRentMortgage').value='10';
		document.getElementById('expeditedMigrant').value='N';
		//}, 10000);
		document.getElementById('button3').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Register Application - Summary'){
		document.getElementById('workerAssignment').value='500238';
		document.getElementById('button3').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Person Details'){
		document.getElementsByName('verifications')[0].value='HC';
		document.getElementsByName('verificationSource')[0].value='HC';
		document.getElementById('primaryRace').value='AS';
		document.getElementById('ethnicity').value='HL';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Individual Interviewed / Applicant - Details'){
		document.getElementsByName('interviewMode')[0].value='I';
		document.getElementById('cin').selectedIndex=1;
		document.getElementById('hasBeenInterviewed').value='Y';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Education - Details'){
		document.getElementById('highestLevel').value='KI';
		document.getElementById('medicaidStudentStatus').value='NAS';
		document.getElementById('enrollmentStatus').value='NE';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Living Arrangement/Domicile - Details'){
		document.getElementById('livArrangType').value='HO';
		document.getElementById('livArrangApply').value='Y';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Person Demographics - Details'){
		document.getElementsByName('identityDocumentType')[0].value='PPT';
		document.getElementsByName('identityVerification')[0].value='HC';
		document.getElementsByName('identityDocumentViewed')[0].value='OR';
		document.getElementById('monthidDocViewedDt').value=today.getMonth()+1;
		document.getElementById('dateidDocViewedDt').value=today.getDate();
		document.getElementById('yearidDocViewedDt').value=today.getFullYear();
		document.getElementsByName('identityDocumentComments')[0].value='Test';
		document.getElementsByName('citizenship')[0].value='US';
		document.getElementsByName('citizenVerificationCode')[0].value='HC';
		document.getElementsByName('citizenshipDocumentType')[0].value='UPP';
		document.getElementsByName('citizenshipSVESStatus')[0].value='VE';
		document.getElementById('monthcitizenSvesDt').value=today.getMonth()+1;
		document.getElementById('datecitizenSvesDt').value=today.getDate();
		document.getElementById('yearcitizenSvesDt').value=today.getFullYear();		
		document.getElementsByName('citizenshipDocumentViewed')[0].value='ORIG';	
		document.getElementById('monthcitizenDocViewedDt').value=today.getMonth()+1;
		document.getElementById('datecitizenDocViewedDt').value=today.getDate();
		document.getElementById('yearcitizenDocViewedDt').value=today.getFullYear();		
		document.getElementsByName('citizenshipDocumentComments')[0].value='Test';
		document.getElementsByName('montanaResident')[0].value='Y';
		document.getElementsByName('residentVerification')[0].value='HC';
		document.getElementsByName('personLiveMontana')[0].value='Y';
		document.getElementsByName('locationVerification')[0].value='HC';
		document.getElementsByName('personMovedToMontana')[0].value='N';
		document.getElementsByName('personRemainMontana')[0].value='Y';
		document.getElementsByName('maritalStatus')[0].value='MA';
		document.getElementById('monthserviceOfferedDate').value=today.getMonth()+1;
		document.getElementById('dateserviceOfferedDate').value=today.getDate();
		document.getElementById('yearserviceOfferedDate').value=today.getFullYear();		
		document.getElementsByName('serviceOffered')[0].value='AR';
		document.getElementsByName('whenOffered')[0].value='AC';
		document.getElementsByName('sendVrPacketClient')[0].value='Y';
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Household Individuals - Questions'){		
		document.getElementsByName('currentlyPregnant')[0].value='N';
		document.getElementsByName('medDACPickleQuestion')[0].value='N';
		document.getElementsByName('medQualWorkActivityQuestion')[0].value='N';
		document.getElementsByName('acaAdultCoverageQuestion')[0].value='N';
		document.getElementsByName('fosterCareQuestion')[0].value='N';
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Non - Custodial Parent - Details'){
		document.getElementsByName('absentParentUnknown')[0].value='N';
		document.getElementsByName('lastName')[0].value='Lee';
		document.getElementsByName('gender')[0].value='M';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Non - Custodial Parent - Child Connection'){
		document.getElementById('apChildName').selectedIndex=1;
		document.getElementsByName('relationshipToAbsentParent')[0].value='F';
		document.getElementsByName('paternitySW')[0].value='Y';
		document.getElementsByName('indvWorkAbsenceReason')[0].value='SP';
		document.getElementById('form1dynaLocalSubmitButton').click();
		document.getElementById('actionButtonNext').click();
	}	
	if(document.getElementById('PRINTTITLE').innerHTML=='Pregnancy - Details'){
		document.getElementById('cin').selectedIndex=1;
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();	
		document.getElementsByName('monthpregnancyDueDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datepregnancyDueDate')[0].value=new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
		document.getElementsByName('yearpregnancyDueDate')[0].value=today.getFullYear();			
		document.getElementsByName('noFetuses')[0].value='1';
		document.getElementsByName('pregnancyVerification')[0].value='HC';
		document.getElementsByName('monthdeliveryDate')[0].value=today.getMonth()+1;
		document.getElementsByName('datedeliveryDate')[0].value=today.getDate();
		document.getElementsByName('yeardeliveryDate')[0].value=today.getFullYear();
		document.getElementById('form2dynaLocalSubmitButton').click();
		document.getElementById('actionButtonNext').click()
	}	
	if(document.getElementById('PRINTTITLE').innerHTML=='Person Demographics - Conviction/Rehabilitation'){
		document.getElementsByName('felonyDrugConviction')[0].value='N';
		document.getElementById('actionButtonNext').click()
	}	
	if(document.getElementById('PRINTTITLE').innerHTML=='Resource Questions'){
		document.getElementById('rtcheck1').value='N';
		document.getElementById('rtcheck5').value='N';
		document.getElementById('rtcheck7').value='N';
		document.getElementById('rtcheck3').value='N';
		document.getElementById('lifeInsuranceResSw').value='N';
		document.getElementById('rtcheck4').value='N';
		document.getElementById('unusualValResSw').value='N';
		document.getElementById('livestockResSw').value='N';
		document.getElementById('mineralRightsResSw').value='N';
		document.getElementById('rtcheck2').value='N';
		document.getElementsByName('assetTransferSw')[0].value='N';
		document.getElementsByName('communitySpouseResourceMaintenanceAllowance')[0].value='N';
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Liquid Asset - Details'){
		document.getElementById('cin').selectedIndex=1;
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();	
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();			
		document.getElementsByName('typeCd')[0].value='CAS';
		//document.getElementsByName('typeCd').fireevent "onchange";
		setTimeout(function() {}, 10000);
		document.getElementsByName('resourceVrfCd')[0].value='HC';
		document.getElementsByName('jointlyOwnedSw')[0].value='N';
		document.getElementsByName('characteristic_CH')[0].value='P';
		document.getElementsByName('liquidAssetAmount')[0].value='30';
		document.getElementsByName('monthstartdate')[0].value=today.getMonth()+1;
		document.getElementsByName('datestartdate')[0].value=today.getDate();
		document.getElementsByName('yearstartdate')[0].value=today.getFullYear();		
		document.getElementById('form2dynaLocalSubmitButton').click();
		//document.getElementsByName('transferredSw')[0].value='N';
		//document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Livestock - Details'){
		document.getElementById('cin').selectedIndex=1;
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('characteristic')[0].value='PET';
		document.getElementsByName('verificationLivestock')[0].value='HC';
		document.getElementsByName('jointOwnerSw')[0].value="N";
		document.getElementsByName('fairMarketValue1')[0].value='50';
		document.getElementsByName('livestockTransferredSw')[0].value="N";		
		document.getElementById('actionButtonNext').click()
	}	
	if(document.getElementById('PRINTTITLE').innerHTML=='Income Questions'){
		document.getElementById('incomeEDTestSw').value='N';
		document.getElementById('rtcheck3').value='N';
		document.getElementById('rtcheck1').value='N';
		document.getElementsByName('isSelfEmployed')[0].value='N';
		document.getElementsByName('additionalIncomeExpenses')[0].value='N';
		document.getElementsByName('householdCommunitySpouseIncomeAllowance')[0].value='N';
		document.getElementById('rtcheck5').value='N';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Unearned Income - Details'){
		document.getElementById('cin').selectedIndex=1;
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('unearnedIncomeTp')[0].value='SS';
		document.getElementsByName('payFrequency')[0].value='MO';
		document.getElementsByName('incomeSource')[0].value='Source';
		document.getElementsByName('amount')[0].value='10';
		document.getElementsByName('verification')[0].value='HC';		
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Earned Income - Details'){
		document.getElementById('cin').selectedIndex=1;
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('type')[0].value='WA';
		document.getElementsByName('payFrequency')[0].value='MO';
		document.getElementsByName('incomeSource')[0].value='Source';		
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Earned Income- Payments'){
		document.getElementsByName('monthfirstPayDateOnAfter')[0].value=today.getMonth()+1;
		document.getElementsByName('datefirstPayDateOnAfter')[0].value=today.getDate();
		document.getElementsByName('yearfirstPayDateOnAfter')[0].value=today.getFullYear();	
		document.getElementById('buildWs').click()
		document.getElementById('editImage0').click()
		document.getElementsByName('actualAnticipated')[0].value='AC';
		document.getElementsByName('wsAmount')[0].value='700';
		document.getElementsByName('numberOfHoursWorked')[0].value='30';		
		document.getElementsByName('verification')[0].value='HC';
		document.getElementById('form2dynaLocalSubmitButton').click();
		document.getElementsByName('calcAvgBy')[0].value='CAP';
		document.getElementById('actionButtonNext').click()		
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Self Employment - Details'){
		document.getElementById('cin').selectedIndex=1;
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('businessStructure')[0].value='SP';
		document.getElementsByName('responsibleWithholdSSTaxSw')[0].value='Y';
		document.getElementsByName('earningIncomeDirectlySw')[0].value='N';			
		document.getElementsByName('payingWithholdSSTaxSw')[0].value='Y';
		document.getElementsByName('businessType')[0].value='FR';
		document.getElementsByName('businessName')[0].value='Test';
		document.getElementsByName('businessActivity')[0].value='Test';
		document.getElementsByName('hoursPerWeekActiveParticipate')[0].value='30';
		document.getElementsByName('incomeDocumentation')[0].value='BR';
		document.getElementsByName('businessJointlyOwnedSw')[0].value='N';
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Self Employment - Business Records'){
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();
		document.getElementsByName('amount')[0].value='100';
		document.getElementsByName('monthmonthandYear')[0].value=today.getMonth()+1;
		document.getElementsByName('yearmonthandYear')[0].value=today.getFullYear();			
		document.getElementsByName('source')[0].value='Test';
		document.getElementById('form2dynaLocalSubmitButton').click();
		document.getElementsByName('selfEmpIncomeExpensesSw')[0].value='N';
		document.getElementsByName('incomeExpenseVerification')[0].value='HC';
		document.getElementsByName('numberOfMonthsRepresented')[0].value='1';
		document.getElementsByName('monthsIntendedToCover')[0].value='1';
		document.getElementsByName('numberOfMonthsAnnually')[0].value='1';
		document.getElementById('actionButtonNext').click()
	}	
	if(document.getElementById('PRINTTITLE').innerHTML=='Additional MAGI Income/Expense Details'){
		document.getElementById('cin').selectedIndex=1;
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('incomeExpenseType')[0].value='TFE';
		document.getElementsByName('frequency')[0].value='MO';
		document.getElementsByName('amountperFrequency')[0].value='100';			
		document.getElementsByName('verification')[0].value='HC';
		document.getElementById('actionButtonNext').click()
	}	
	if(document.getElementById('PRINTTITLE').innerHTML=='Shelter Expenses - Details'){
		document.getElementById('personIncurringExpense').selectedIndex=1;
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();
		document.getElementsByName('isHouseholdCurrentlyOccupying')[0].value='Y';			
		document.getElementsByName('expenseTypeCd')[0].value='SURE';
		document.getElementsByName('frequency')[0].value='MO';
		document.getElementsByName('amountperFrequency')[0].value='100';
		document.getElementsByName('verification')[0].value='HC';
		document.getElementsByName('receiveRentSubsidy')[0].value='N';
		document.getElementById('actionButtonNext').click()
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Utility Expenses - Details'){
		document.getElementById('personIncurringExpense').selectedIndex=1;
		document.getElementsByName('montheffectiveBeginDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateeffectiveBeginDate')[0].value=today.getDate();
		document.getElementsByName('yeareffectiveBeginDate')[0].value=today.getFullYear();
		document.getElementsByName('monthverfReceivedDate')[0].value=today.getMonth()+1;
		document.getElementsByName('dateverfReceivedDate')[0].value=today.getDate();
		document.getElementsByName('yearverfReceivedDate')[0].value=today.getFullYear();
		document.getElementsByName('heatingCoolingExpenses')[0].value='N';			
		document.getElementsByName('utilityVerification')[0].value='HC';
		document.getElementById('actionButtonNext').click()
	}	
	if((document.getElementById('PRINTTITLE').innerHTML=='Household Address - Summary')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Person Household Status')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Primary Individual')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Program Request - Summary')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Person Demographics - SSN Application/Armed Services')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Non Financial - Questions')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Non - Custodial Parent - Additional Details')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Non - Custodial Parent - Address Details')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Non - Custodial Parent - Employment Details')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Non - Custodial Parent - Child Support Order')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Compliance - Questions')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Unearned Income - Average')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Earned Income - Average')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Self Employment Income - Average')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Expense Questions')||
	   (document.getElementById('PRINTTITLE').innerHTML=='Pathways/Tribal NEW Referral - Summary')){
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Wrapup - Run Eligibility'){
		document.getElementById('SUBMIT').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Family Investment Agreement - Details'){								
		document.getElementById('referredTo').value='NEW';
		document.getElementById('monthworcTribalStartDate').value=today.getMonth()+1;
		document.getElementById('dateworcTribalStartDate').value=today.getDate();
		document.getElementById('yearworcTribalStartDate').value=today.getFullYear();
		document.getElementById('phone1programPhoneNumber').value='';
		document.getElementById('actionButtonNext').click();
	}
	if(document.getElementById('PRINTTITLE').innerHTML=='Issuance - Details'){
		document.getElementById('issuanceMethod_0').value='EB';
		document.getElementById('additionalProtectivePayee_0').value='N';
		document.getElementById('actionButtonNext').click();
	}	
}myFunction()