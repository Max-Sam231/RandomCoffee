import { useEffect, useState } from "react";
import { supabase } from "../../shared/supabaseClient";



function ProfilePage() {
  const [dataUser, setDataUser] = useState(new Array<Object>());
    useEffect(() => {
        const fetchDataUser = async () => {
          // const { data } = await supabase.from('match_results').select();
          const { data } = await supabase.from('users').select();
          if (data) {
            // console.log(data);
            setDataUser(data);
          }
        };
        fetchDataUser();
    }, []);

  
  return (
    <div>
     профиль
    </div>
  )
}
export default ProfilePage;
