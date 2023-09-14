import {json} from 'react-router-dom';
import React, {useState} from 'react';
import '../styles/detail.css';

// 자바스크립트 적용 확인해보기
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
// 	anchor.addEventListener('click', function (e) {
// 		e.preventDefault();

// 		const targetId = this.getAttribute('href').substring(1);
// 		const targetElement = document.getElementById(targetId);

// 		window.scrollTo({
// 			top: targetElement.offsetTop,
// 			behavior: 'smooth', // 부드러운 스크롤 애니메이션을 적용합니다.
// 		});
// 	});
// });

// 이미지 불러오기
import thumbnail01 from '../assets/images/detail/301859392_LM29886.jpg';
import thumbnail02 from '../assets/images/detail/301859392_add1_GD94957.jpg';
import mybrand from '../assets/images/detail/bg_heart.png';
import share from '../assets/images/detail/share.png';
import star from '../assets/images/detail/star.png';
import intro from '../assets/images/detail/2022FW_intro.jpg';
import color from '../assets/images/detail/MJHD7622_01_pack_mj.jpg';
import detail01 from '../assets/images/detail/MJHD7622_navy_jn.jpg';
import detail02 from '../assets/images/detail/MJHD7622_info_jn.jpg';
import detail03 from '../assets/images/detail/MJHD7622_02_pack_mj.jpg';
import detail04 from '../assets/images/detail/MJHD7622_03_pack_mj.jpg';
import detail05 from '../assets/images/detail/MJHD7622_04_pack_mj.jpg';
import detail06 from '../assets/images/detail/MJHD7622_05_pack_mj.jpg';
import detail07 from '../assets/images/detail/MJHD7622_06_pack_mj.jpg';
import detail08 from '../assets/images/detail/MJHD7622_07_pack_mj.jpg';
import detail09 from '../assets/images/detail/MJHD7622_08_pack_mj.jpg';
import detail10 from '../assets/images/detail/MJHD7622_09_pack_mj.jpg';
import detail11 from '../assets/images/detail/MJHD7622_10_pack_mj.jpg';
import detail12 from '../assets/images/detail/MJHD7622_11_pack_mj.jpg';
import detail13 from '../assets/images/detail/MJHD7622_12_pack_mj.jpg';
import detail14 from '../assets/images/detail/MJHD7622_13_pack_mj.jpg';
import detail15 from '../assets/images/detail/MJHD7622_14_pack_mj.jpg';
import detail16 from '../assets/images/detail/MJHD7622_15_pack_mj.jpg';
import detail17 from '../assets/images/detail/MJHD7622_16_pack_mj.jpg';
import detail18 from '../assets/images/detail/MJHD7622_17_pack_mj.jpg';
import detail19 from '../assets/images/detail/MJHD7622_18_pack_mj.jpg';
import detail20 from '../assets/images/detail/MJHD7622_19_pack_mj.jpg';
import detail21 from '../assets/images/detail/MJHD7622_color_jn.jpg';
import detail22 from '../assets/images/detail/MJHD7622_size_jn.jpg';
import detail23 from '../assets/images/detail/cleaning_notice.jpg';
import list01_1 from '../assets/images/detail/list01/image_1.png';
import list01_2 from '../assets/images/detail/list01/image_2.png';
import list01_3 from '../assets/images/detail/list01/image_3.png';
import list01_4 from '../assets/images/detail/list01/image_4.png';
import list01_5 from '../assets/images/detail/list01/image_5.png';
import list01_6 from '../assets/images/detail/list01/image_6.png';
import list02_1 from '../assets/images/detail/list02/image_1.png';
import list02_2 from '../assets/images/detail/list02/image_2.png';
import list02_3 from '../assets/images/detail/list02/image_3.png';
import list02_4 from '../assets/images/detail/list02/image_4.png';
import list02_5 from '../assets/images/detail/list02/image_5.png';
import list02_6 from '../assets/images/detail/list02/image_6.png';
import more01 from '../assets/images/detail/more/img_01.jpeg';
import more02 from '../assets/images/detail/more/img_02.png';
import more03 from '../assets/images/detail/more/img_03.png';
import more04 from '../assets/images/detail/more/img_04.jpeg';
import more05 from '../assets/images/detail/more/img_05.png';
import more06 from '../assets/images/detail/more/img_06.png';
import more07 from '../assets/images/detail/more/img_07.png';
import more08 from '../assets/images/detail/more/img_08.png';
import icoMoreBrand from '../assets/images/detail/ico_more_brand.png';
import tooltip from '../assets/images/detail/tooltip.png';

function Detail() {
	const [activeTab, setActiveTab] = useState('DETAIL');

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	const tabStyle = {
		color: 'black',
		cursor: 'pointer',
	};

	return (
		<div className="relative mx-auto mb-[200px] w-[1240px]">
			<ul className="mb-7 mt-7 flex flex-row text-sm text-gray-500">
				<li className="mr-3">
					<p className="mr-2 inline">HOME</p> &#62;
				</li>
				<li className="mr-3">
					<p className="mr-2 inline">WOMEN</p> &#62;
				</li>
				<li className="mr-3">
					<p className="mr-2 inline">APPAREL</p> &#62;
				</li>
				<li className="mr-3">
					<p className="mr-2 inline">티셔츠</p> &#62;
				</li>
				<li className="text-black">후드</li>
			</ul>
			<section className="flex-rows mb-10 flex">
				<div className="mr-[55px]">
					<img className="mb-5" src={thumbnail01} alt="" />
					<ul className="flex w-[140px] flex-row justify-between">
						<li>
							<img className="w-15 h-20" src={thumbnail01} alt="" />
						</li>
						<li>
							<img className="w-15 h-20" src={thumbnail02} alt="" />
						</li>
					</ul>
				</div>

				<div className="w-[660px]">
					<div className="relative border-b-2 border-black">
						<h4 className="mb-4 text-[24px] font-medium">WV PROJECT</h4>
						<p className="mb-5 text-base font-normal">[패키지] 컬러인 후드 2PACK MJHD7622</p>
						<ul className="mb-5 flex flex-row">
							<li className="w-[125px]">
								<img className="mr-1 inline" src={star} alt="" />
								<span className="align-middle text-lg font-semibold">4.9</span>
							</li>
							<li className="text-sm">55개 리뷰</li>
						</ul>

						<dl className="mb-4">
							<dt className="float-left w-[125px] py-2 text-[13px]">정상가</dt>
							<dd className="flex flex-row py-2 text-[18px] text-grey-200">
								108,000 <p className="text-base">원</p>
							</dd>
							<dt className="float-left w-[125px] py-2">
								<span className="mr-2 text-[13px]">할인적용가</span>
								<button className="align-middle">
									<img src={tooltip} alt="" />
								</button>
							</dt>
							<dd className="flex flex-row py-2">
								74,900<p>원</p>
								<span className="text-tertiary">31&#37;</span>
							</dd>
						</dl>

						<div className="t-0 r-0 absolute flex flex-row">
							<span>MY</span>
							<img className="h-4 w-7" src={mybrand} alt="" />
							<span>BRAND</span>
						</div>
						<button className="float-right">
							<img src={share} alt="" />
						</button>
					</div>
				</div>
			</section>
			<section className="mb-20">
				<div className="mb-4 flex flex-row">
					<h6 className="mr-2">More by WV PROJECT</h6>
					<img className="h-[14px] w-[14px] align-middle" src={icoMoreBrand} alt="" />
				</div>
				<ul className="flex w-[1240px] flex-row justify-between">
					<li className="imgHover h-[180px] w-[135px]">
						<img src={more01} alt="" />
					</li>
					<li className="imgHover h-[180px] w-[135px]">
						<img src={more02} alt="" />
					</li>
					<li className="imgHover h-[180px] w-[135px]">
						<img src={more03} alt="" />
					</li>
					<li className="imgHover h-[180px] w-[135px]">
						<img src={more04} alt="" />
					</li>
					<li className="imgHover h-[180px] w-[135px]">
						<img src={more05} alt="" />
					</li>
					<li className="imgHover h-[180px] w-[135px]">
						<img src={more06} alt="" />
					</li>
					<li className="imgHover h-[180px] w-[135px]">
						<img src={more07} alt="" />
					</li>
					<li className="imgHover h-[180px] w-[135px]">
						<img src={more08} alt="" />
					</li>
				</ul>
			</section>

			<section id="detail">
				<div className="detailTabBtn mb-16 mt-[160px] grid grid-cols-4 font-normal text-gray-700">
					<a href="#detail" className="detailTabBtnOn py-4 text-center text-mlg">
						DETAIL
					</a>
					<a href="#review" className="detailTabBtn02 py-4 text-center text-mlg">
						REVIEW (55)
					</a>
					<a href="#question" className="detailTabBtn03 py-4 text-center text-mlg">
						Q&A (12)
					</a>
					<a href="#delivery" className="detailTabBtn04 py-4 text-center text-mlg">
						RETURN & DELIVERY
					</a>
				</div>

				<div className="mx-auto flex w-[780px] flex-col justify-center text-center">
					<img src={intro} alt="" />
					<img src={color} alt="" />
					<img src={detail01} alt="" />
					<img className="pt-20" src={detail02} alt="" />
					<img className="pt-20" src={detail03} alt="" />
					<img className="pt-20" src={detail04} alt="" />
					<img className="pt-20" src={detail05} alt="" />
					<img className="pt-20" src={detail06} alt="" />
					<img className="pt-20" src={detail07} alt="" />
					<img className="pt-20" src={detail08} alt="" />
					<img className="pt-20" src={detail09} alt="" />
					<img className="pt-20" src={detail10} alt="" />
					<img className="pt-20" src={detail11} alt="" />
					<img className="pt-20" src={detail12} alt="" />
					<img className="pt-20" src={detail13} alt="" />
					<img className="pt-20" src={detail14} alt="" />
					<img className="pt-20" src={detail15} alt="" />
					<img className="pt-20" src={detail16} alt="" />
					<img className="pt-20" src={detail17} alt="" />
					<img className="pt-20" src={detail18} alt="" />
					<img className="pt-20" src={detail19} alt="" />
					<img className="pt-20" src={detail20} alt="" />
					<img className="pt-20" src={detail21} alt="" />
					<img className="pt-20" src={detail22} alt="" />
					<img className="pt-20" src={detail23} alt="" />
				</div>
			</section>

			<div className="mb-20">
				<h6 className="mb-4">You may also like</h6>
				<div className="flex flex-row justify-between">
					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list01_1} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list01_2} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list01_3} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list01_4} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list01_5} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list01_6} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<h6 className="mb-4">Pick your beauty items</h6>
				<div className="flex flex-row justify-between">
					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list02_1} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list02_2} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list02_3} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list02_4} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list02_5} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>

					<ul className="w-[195px]">
						<li className="mb-2">
							<img src={list02_6} alt="" />
						</li>
						<li className="mb-4">FLUKE</li>
						<li>플루크 미션 후드 티셔츠 FHT2032 &#47; 3colorW</li>
						<li>
							<span>44,500</span>
							<span>75,000</span>
							<span>41&#37;</span>
						</li>
					</ul>
				</div>
			</div>

			<section id="review">
				<div className="detailTabBtn mb-16 mt-[160px] grid grid-cols-4 font-normal text-gray-700">
					<a href="#detail" className="detailTabBtn01 py-4 text-center text-mlg">
						DETAIL
					</a>
					<a href="#review" className="detailTabBtnOn py-4 text-center text-mlg">
						REVIEW (55)
					</a>
					<a href="#question" className="detailTabBtn03 removeLine py-4 text-center text-mlg">
						Q&A (12)
					</a>
					<a href="#delivery" className="detailTabBtn04 py-4 text-center text-mlg">
						RETURN & DELIVERY
					</a>
				</div>

				{/* 리뷰 탭에서 사용하기 */}

				<ul className="flex flex-row">
					<li className="mr-3 text-base text-grey-400">
						<button onClick={() => handleTabClick('DETAIL')}>
							<div style={activeTab === 'DETAIL' ? tabStyle : {}}>최신순</div>
						</button>
					</li>
					<li className="mr-3 text-sm text-grey-400">|</li>
					<li className="mr-3 text-base text-grey-400">
						<button onClick={() => handleTabClick('REVIEW')}>
							<div style={activeTab === 'REVIEW' ? tabStyle : {}}>평점 높은순</div>
						</button>
					</li>
					<li className="mr-3 text-sm text-grey-400">|</li>
					<li className="mr-3 text-base text-grey-400">
						<button onClick={() => handleTabClick('Q&A')}>
							<div style={activeTab === 'Q&A' ? tabStyle : {}}>평점 낮은순</div>
						</button>
					</li>
					<li className="mr-3 text-sm text-grey-400">|</li>
					<li className="mr-3 text-base text-grey-400">
						<button onClick={() => handleTabClick('RETURN & DELIVERY')}>
							<div style={activeTab === 'RETURN & DELIVERY' ? tabStyle : {}}>추천순</div>
						</button>
					</li>
				</ul>
			</section>

			<section id="question">
				<div className="detailTabBtn mb-16 mt-[160px] grid grid-cols-4 font-normal text-gray-700">
					<a href="#detail" className="detailTabBtn01 py-4 text-center text-mlg">
						DETAIL
					</a>
					<a href="#review" className="detailTabBtn02 py-4 text-center text-mlg">
						REVIEW (55)
					</a>
					<a href="#question" className="detailTabBtnOn py-4 text-center text-mlg">
						Q&A (12)
					</a>
					<a href="#delivery" className="detailTabBtn04 removeLine py-4 text-center text-mlg">
						RETURN & DELIVERY
					</a>
				</div>

				<button className="mb-6 h-[50px] w-[180px] bg-black text-white">상품문의</button>

				<tr className="flex flex-row justify-between border-t-2 border-black p-6">
					<td className="mr-6 bg-black px-2 py-1 text-xs text-white">답변완료</td>
					<td className="flex w-[1020px] flex-row bg-red-300">
						<p>
							<a href="">사이즈</a>
							<img src="" alt="" />
						</p>
						<span className=" w-[180px] bg-green-300">lh*******@gmail.com</span>
					</td>
					<td>2023. 01. 16</td>
				</tr>
			</section>

			<section id="delivery">
				<div className="detailTabBtn mb-16 mt-[160px] grid grid-cols-4 font-normal text-gray-700">
					<a href="#detail" className="detailTabBtn01 py-4 text-center text-mlg">
						DETAIL
					</a>
					<a href="#review" className="detailTabBtn02 py-4 text-center text-mlg">
						REVIEW (55)
					</a>
					<a href="#question" className="detailTabBtn03 py-4 text-center text-mlg">
						Q&A (12)
					</a>
					<a href="#delivery" className="detailTabBtnOn py-4 text-center text-mlg">
						RETURN & DELIVERY
					</a>
				</div>
				<span className="mb-3 block text-mlg">배송/교환/반품/AS 관련 유의사항</span>
				<span className="mb-4 block text-base text-grey-800">상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음 안내사항보다 우선 적용됩니다.</span>
				<tbody>
					<tr>
						<th className="w-[270px] border-t border-[#d5d5d5] bg-gray-50 text-center text-lg font-normal">배송정보</th>
						<td>
							<ul className="border-t border-[#d5d5d5] px-10 py-10 text-sm text-grey-800">
								<li className="ml-2 list-disc pb-3">상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이 달라집니다.</li>
								<li className="ml-2 list-disc pb-3">일부 주문상품 또는 예약상품의 경우 기본 배송일 외에 추가 배송 소요일이 발생될 수 있습니다.</li>
								<li className="ml-2 list-disc pb-3">동일 브랜드의 상품이라도 상품별 출고일시가 달라 각각 배송될 수 있습니다.</li>
								<li className="ml-2 list-disc pb-3">제주 및 도서산간 지역은 출고, 반품, 교환시 추가 배송비(항공, 도선료)가 부과 될 수 있습니다.</li>
								<li className="ml-2 list-disc">상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은 배송이 불가합니다.</li>
							</ul>
						</td>
					</tr>
					<tr>
						<th className="w-[270px] border-t border-[#d5d5d5] bg-gray-50 text-center text-lg font-normal">취소/반품/교환 안내</th>
						<td>
							<ul className="border-t border-[#d5d5d5] px-10 py-10 text-sm text-grey-800">
								<li className="ml-2 list-disc pb-3">상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이 달라집니다.</li>
								<li className="ml-2 list-disc pb-3">일부 주문상품 또는 예약상품의 경우 기본 배송일 외에 추가 배송 소요일이 발생될 수 있습니다.</li>
								<li className="ml-2 list-disc pb-3">동일 브랜드의 상품이라도 상품별 출고일시가 달라 각각 배송될 수 있습니다.</li>
								<li className="ml-2 list-disc pb-3">제주 및 도서산간 지역은 출고, 반품, 교환시 추가 배송비(항공, 도선료)가 부과 될 수 있습니다.</li>
								<li className="ml-2 list-disc">상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은 배송이 불가합니다.</li>
							</ul>
						</td>
					</tr>
					<tr>
						<th className="w-[270px] border-t border-[#d5d5d5] bg-gray-50 text-center text-lg font-normal">반품/교환 불가능한 경우</th>
						<td>
							<ul className="border-t border-[#d5d5d5] px-10 py-10 text-sm text-grey-800">
								<li className="ml-2 list-disc pb-3">회수지 정보 : 경기도 남양주시 경춘로 1288 (평내동) FMJ 물류센터 / 주식회사 에프엠제이인터내셔날</li>
								<li className="ml-2 list-disc pb-3">동일 브랜드의 상품이라도 교환/반품 회수지가 다를 수 있습니다. 상품상세 정보 또는 회수지 정보를 확인하신 후 반드시 지정된 회수지로 보내주세요.</li>
								<li className="ml-2 list-disc pb-3">상품을 지정된 회수지가 아닌곳으로 보내실 경우 택배 분실 또는 재발송에 따른 추가 비용이 발생할 수 있습니다.</li>
								<li className="ml-2 list-disc pb-3">
									고객센터나 "My Page&#62;주문취소/교환/반품 신청"을 통한 교환/반품 접수 없이 상품을 회수지로 보내실 경우 재발송에 따른 추가 비용이 발생할 수 있으며 경우에 따라서는 교환/반품이 어려울
									수 있습니다.
								</li>
								<li className="ml-2 list-disc pb-3 font-medium text-black">
									상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품 택배비 고객부담으로 왕복택배비가 발생합니다. (전자상거래 등에서의 소비자보호에 관한 법률 제18조(청약 철회등)9항에 의거
									소비자의 사정에 의한 청약 철회 시 택배비는 소비자 부담입니다.)
								</li>
								<li className="ml-2 list-disc pb-3">결제완료 직후 즉시 주문취소는 "MY Page&#62; 취소/교환/반품 신청"에서 직접 처리 가능합니다.</li>
								<li className="ml-2 list-disc pb-3">주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는 점 양해 부탁드립니다.</li>
								<li className="ml-2 list-disc pb-3">주문상태가 상품준비중인 경우 취소신청이 가능하며 판매자의 승인 여부(이미 배송을 했거나 포장을 완료한 경우)에 따라 취소가 불가능할 수 있습니다.</li>
								<li className="ml-2 list-disc pb-3">교환 신청은 최초 1회에 한하며, 교환 배송 완료 후에는 추가 교환 신청은 불가합니다.</li>
								<li className="ml-2 list-disc pb-3">반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내 접수하여 주십시오.</li>
								<li className="ml-2 list-disc pb-3">임의반품은 불가하오니 반드시 고객센터나 "MY Page&#62; 주문취소/교환/반품 신청"을 통해서 신청접수를 하시기 바랍니다.</li>
								<li className="ml-2 list-disc pb-3">상품하자, 오배송의 경우 택배비 무료로 교환/반품이 가능하지만 모니터의 색상차이, 착용감, 사이즈의 개인의 선호도는 상품의 하자 사유가 아닙니다.</li>
								<li className="ml-2 list-disc pb-3">고객 부주의로 상품이 훼손, 변경된 경우 반품 / 교환이 불가능 합니다.</li>
								<li className="ml-2 list-disc">취소/반품 대금환불이 지연 시 전자상거래법에 의거하여 환불지연 배상처리 절차가 진행됩니다.</li>
							</ul>
						</td>
					</tr>
					<tr>
						<th className="w-[270px] border-b border-t border-[#d5d5d5] bg-gray-50 text-center text-lg font-normal">A/S 안내</th>
						<td>
							<ul className="border-b border-t border-[#d5d5d5] px-10 py-10 text-sm text-grey-800">
								<li className="ml-2 list-disc pb-3">A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련 문의는 더블유컨셉 고객센터를 통해 부탁드립니다.</li>
								<li className="ml-2 list-disc">상품불량에 의한 반품, 교환, A/S, 환불, 품질보증 및 피해보상 등에 관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에 따라 받으실 수 있습니다.</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</section>
		</div>
	);
}

export default Detail;

// import photo from '@/assets/image.svg';
