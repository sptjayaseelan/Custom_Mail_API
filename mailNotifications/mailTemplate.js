const productionTemplate = (data) => {
  let mailLayout = `
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Template</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #ffffff;">
    <!-- Container -->
    <div style="margin: 15px auto; padding: 10px; background-color: #EEF4FD; width: 90%; max-width: 600px; border-radius: 12px; box-shadow: 0px 0px 3px lightgrey; box-sizing: border-box;">
      <!-- Header -->
      <div style="display: flex; align-items: center;">
        <img src="cid:mailLogo" alt="Logo" style="width: 50px; height: 50px; display: inline-block;" />
        <h3 style="color: #373634; margin-top:5px; margin-left: 10px; font-size: 20px; font-weight: 600;">Simmonds Marshall Limited</h3>
      </div>

      <!-- Greeting -->
      <h5 style="color: #000000; margin: 10px 0 0 0; font-size: 15px; font-weight: 600;">Dear Sir/Madam</h5>

      <!-- Message -->
      <p style="color: #000000; font-size: 14px; font-weight: 500; margin-left : 30px; margin-top: 4px;">
        This is an automated email generate by Embridge Digital Production Management System.
      </p>
          


      <!-- Alert Message -->

          <div style = "margin-left:30px;">

          <div style="display: flex; align-items: center;">
            <p style="width: 8px; height: 8px; background: #4e4e4e; border-radius: 50%; margin-bottom: 0px;"></p>

            <p style="color : #ff9800;display: block; font-weight : 600; font-size : 14px; padding-left: 5px;margin-bottom: 0px; margin-top: 1px; padding-top: 5px;">
            Running Product - ${data?.ProductNumber} & Product Grade - ${data?.ProductGrade}
            </p>

          </div>

         <div style="display: flex; align-items: center; padding-top: 5px;">
           <p style="width: 8px; height: 8px; background: #4e4e4e; border-radius: 50%; margin-bottom: 0px;"></p>

           <p style="color : #ff9800;display: block; font-weight : 600; font-size : 14px; padding-left: 5px; margin-top:1px; margin-bottom: 0px;padding-top: 5px;">
            Minimum Temperature - ${data?.MinTemp} 
           </p>

        </div>

        <div style="display: flex; align-items: center; padding-top: 5px;">
            <p style="width: 8px; height: 8px; background: #4e4e4e; border-radius: 50%; margin-bottom: 0px;"></p>
            
            <p style="color : #ff9800;display: block; font-weight : 600; font-size : 14px; padding-left: 5px; margin-top: 1px; margin-bottom: 0px; padding-top: 5px;">
             Maximum Temperature - ${data?.MaxTemp}
           </p>
        </div>

       <div style="display: flex; align-items: center; padding-top: 5px;">
              <p style="font-size: 25px; font-weight: 700;margin-top:  0px; margin-bottom: 0px;">*</p>

      <p style="color : #E91E63;display: block; font-weight : 600; font-size : 14px;margin-top:  0px; margin-bottom: 0px; padding-left: 5px; padding-top: 5px;">
        ${data?.Parameter}  is out of Value - ${data?.OverValue} &nbsp; at &nbsp; ${data?.OverLimitTime}
      </p>
      </div>
      </div>

     <p style="margin-top:15px; ">
            <span style="display: block;font-size: 14px;font-weight: 500;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Thanks & Regards,</span>
            <span style="display: block;font-size: 14px;font-weight: 500;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Simmonds Marshall Limited.</span>
         </p>

      <!-- Footer -->
      <p style="margin-top: 20px; color: black; text-align: center; font-weight: bold; font-size: 12px;">
        &copy; Designed & Developed by
        <span style="color: #C70128;">Embridge Solutions Pvt Ltd</span>
      </p>
    </div>
  </body>
</html>
`;
  return mailLayout;
};

module.exports = {
  productionTemplate,
};
