/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from '../../../styles/SideBar.module.css';
import Link from 'next/link';
import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCookie } from 'cookies-next';
import { loginStudent } from '@/Components/Redux/action/index'
import {
  faBookOpen,
  faHome,
  faListAlt,
  faAlignCenter,
  faBook,
} from '@fortawesome/free-solid-svg-icons'
import QuickPanel from './QuickPanel';
import { Hidden, Box } from '@mui/material';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
const SideBar = () => {
  const router = useRouter()
  const dispatch =useDispatch()
  useEffect(() => {
  const name = getCookie(`nameStudent`);
  const email= getCookie(`emailStudent`);
  const identityNumber = getCookie(`identityNumberStudent`);
  const identityType= getCookie(`identityTypeStudent`);
  const Nationality = getCookie(`nationalityStudent`);
  const data ={name,email,identityNumber,identityType,Nationality}
  dispatch(loginStudent(data))
   
   if(!name && !email)
   {
    router.replace(`/Login`)
   }
  }, [])
  
  return (
    <>
      <Hidden lgDown>
      <Box>
      <nav className={styles.main_menu}>
        <ul className={styles.ul}>
          <Box sx={{backgroundColor:`black`}}>
         <li className={styles.li}>
            <Link href="/Dashboard">
              <a className={styles.a} href="#">
                <FontAwesomeIcon className="fa-lg" icon={faHome as IconProp} />
                <span className={styles.nav_text}>Home</span>
              </a>
            </Link>
          </li>
          </Box>
          <li className={styles.li}>
            <Link href="/DegreeAttestation">
              <a className={styles.a} href="#">
                {/* <i className="fa bi bi-book-fill fa-lg"></i> */}
                <FontAwesomeIcon className="fa-lg" icon={faBookOpen as IconProp} />
                <span className={styles.nav_text}>Degree Attestation</span>
              </a>
            </Link>
          </li>

          <li className={styles.li}>
            <Link href="/TrackApplicationTables">
              <a className={styles.a} href="#">
                <FontAwesomeIcon className="fa-lg" icon={faListAlt as IconProp} />
                <span className={styles.nav_text}>Track Application</span>
              </a>
            </Link>
          </li>

          <li className={styles.li}>
            <Link href="/DegreeAttestation">
              <a className={styles.a} href="#">
                <FontAwesomeIcon className="fa-lg" icon={faAlignCenter as IconProp} />
                <span className={styles.nav_text}>Equilance Serivce</span>
              </a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/Ecourses">
              <a className={styles.a} href="#">
                <FontAwesomeIcon className="fa-lg" icon={faBook as IconProp} />
                <span className={styles.nav_text}>E-course</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      </Box>
      </Hidden>
      <QuickPanel/>
    </>
  );
};
export default SideBar;
