import {useAuth} from '@/contexts/Auth';
import join from '../../public/header/icon_join.png';
import login from '../../public/header/icon_login.png';
import logout from '../../public/header/icon_logout.svg';
import my from '../../public/header/icon_my.png';
import shopping from '../../public/header/icon_shopping.png';
import logo from '../../public/header/logo.png';
import {NavLink, useNavigate} from 'react-router-dom';

function GlobalSearch() {
	const {isAuth, signOut} = useAuth();
	const navigate = useNavigate();

	const handleSignOut = async () => {
		await signOut();
		navigate('/');
	};

	return (
		<>
			<div className="global_search relative mx-auto h-[88px] max-w-[1920px] bg-[#fff] pr-[20px]">
				<a href="/" className="symbol absolute left-[20px] top-[32px]">
					<img src={logo} alt="M CONCEPT 홈" />
				</a>
				<div className="top_search absolute left-[50%] top-[9px] z-[101] h-[70px] w-[392px] translate-x-[-50%] bg-[#fff] py-[16px] pl-[11px] pr-[15px] after:absolute after:block after:h-[1px] after:w-[360px] after:bg-[#000] after:content-['']">
					<input
						className="float-left block h-[44px]  w-[335px] border-none bg-none p-0 text-[14px] leading-[44px] focus:outline-none"
						type="text"
						placeholder="지금 바로 [뉴시즌]으로 가을 신상품을 만나보세요!"
						maxLength={80}
						autoComplete="off"
					/>
					<button
						type="submit"
						className="btn_search bg-top-[9px] h-[44px] w-[25px] bg-[url('../../public/header/icon_search.png')] bg-auto bg-center bg-no-repeat align-middle"
						aria-label="검색버튼"
					></button>
				</div>
				<ul className="utility float-right mr-[-17px] flex pt-[26px]">
					{!isAuth && (
						<li>
							<a href="/" className="block w-[64px] text-center">
								<img className="inline-block h-[30px] w-[30px]" src={join} alt="joinIcon" />
								<strong className="block text-[12px]">JOIN</strong>
							</a>
						</li>
					)}

					{isAuth && (
						<li>
							<button onClick={handleSignOut} className="block w-[64px] text-center" type="button">
								<img src={logout} className="inline-block h-[30px] w-[30px]" alt="logout" />
								<strong className="block text-[12px]">LOGOUT</strong>
							</button>
						</li>
					)}
					{!isAuth && (
						<NavLink to={'/login'}>
							<li>
								<button Link className="block w-[64px] text-center" type="button">
									<img className="inline-block h-[30px] w-[30px]" src={login} alt="loginIcon" />
									<strong className="block text-[12px]">LOGIN</strong>
								</button>
							</li>
						</NavLink>
					)}
					<li>
						<a href="/" className="block w-[64px] text-center">
							<img className="inline-block h-[30px] w-[30px]" src={my} alt="myIcon" />
							<strong className="block text-[12px]">MY</strong>
						</a>
					</li>
					<li>
						<a href="/" className="block w-[64px] text-center">
							<img className="inline-block h-[30px] w-[30px]" src={shopping} alt="shoppingIcon" />
							<strong className="block text-[12px]">0</strong>
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default GlobalSearch;
