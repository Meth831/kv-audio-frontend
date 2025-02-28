import { createClient } from "@supabase/supabase-js";

const anon_key =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5bHJtYmR1ZWlvenVlbnNybWZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NzU1MTQsImV4cCI6MjA1NTU1MTUxNH0._aMrTo4vVmcghOtKVOyNCD0NIn_Jap-u7Pz7NQ6nq4Y";
const supabase_url = "https://cylrmbdueiozuensrmfc.supabase.co";

const supabase = createClient(supabase_url, anon_key);

export default function mediaUpload(file) {
	return new Promise((resolve, reject) => {
        if(file == null){
            reject("No file selected")
        }

		const timestamp = new Date().getTime();
		const fileName = timestamp + file.name;

		supabase.storage
			.from("images")
			.upload(fileName, file, {
				cacheControl: "3600",
				upsert: false,
			})
			.then(() => {
				const publicUrl = supabase.storage.from("images").getPublicUrl(fileName)
					.data.publicUrl;
				resolve(publicUrl);
			}).catch(()=>{
                reject("Error uploading file")
            })
	});
}
