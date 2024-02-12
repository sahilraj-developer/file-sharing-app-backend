 import File from "../models/file.js";
 
 const uploadImage =async(req,res)=>{

    console.log("req",req.file)
   
    const fileObj = {
        path:req.file.path,
        name:req.file.originalname
    }
try{
  const file =  await File.create(fileObj);
  return  res.status(200).json({path: `http://localhost:3001/file/${file._id}`});

   }catch(error){
    console.log("error",error)
    res.status(500).json({error:error.message})
   }

}

const downloadImage = async (req, res) => {
   try {
       const file = await File.findById(req.params.id);
       if (!file) {
           return res.status(404).json({ error: "File not found" });
       }

       file.downloadContent++;
       await file.save();

       // Send the file for download
       res.download(file.path, file.name, (error) => {
           if (error) {
               console.error(error);
               return res.status(500).json({ error: "Error occurred while downloading the file" });
           }
           // Add script to close the window after download
           res.end('<script>window.close();</script>');
       });
   } catch (error) {
       console.error(error);
       return res.status(500).json({ error: error.message });
   }
};


export {uploadImage , downloadImage}