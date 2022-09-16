import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Newslettter from "../../components/Newslettter";
// import { Base64 } from "js-base64";
import {
	attchment_img,
	buddies1,
	buddies2,
	buddies3,
	buddies4,
	buddies5,
	buddies6,
	buddies7,
	buddies8,
	buddies9,
	bxsmile,
	comment,
	comment1,
	comment2,
	comment3,
	comment4,
	comment_emoji,
	Following1,
	Following2,
	Following3,
	Following4,
	following_admin_img2,
	following_admin_img3,
	friend_profile_img,
	gallery_btn,
	left_question,
	likes,
	live,
	newsfeed1,
	newsfeed2,
	newsfeed3,
	photos,
	profile_img,
	right_question,
	share,
	Star_img,
	story1,
	story2,
	story3,
	story4,
	story5,
	storyadmin1,
	storyadmin2,
	storyadmin3,
	storyadmin4,
	storyadmin5,
	story_img,
	Stream1,
	Stream2,
	Stream3,
	stream_img_1,
	verified,
	video_btn,
} from "../../constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFilePicker } from "use-file-picker";
import { useNavigate } from "react-router-dom";

const Home2 = () => {
	const [openFileSelector, { filesContent, loading }] = useFilePicker({
		multiple: true,
		accept: [".png", ".jpg", ".mp4", "gif", "pdf"],
		limitFilesConfig: { min: 2, max: 3 },
	});
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
	};
	const stream_list = [
		{
			id: 1,
			Stream_title: "Stream Title Go Here",
			Name: "Thomas Curtis",
			IsLive: true,
			Viewers: "43K",
			verified_account: true,
			thumbnail: Stream1,
			profile_img: stream_img_1,
			star: Star_img,
		},
	];

	const navigate = useNavigate();

	const stream_list2 = [
		{
			id: 2,
			Stream_title: "Happy new Year!",
			Name: "Christine ",
			IsLive: true,
			Viewers: "43K",
			verified_account: true,
			thumbnail: Stream2,
			profile_img: stream_img_1,
			star: null,
		},
		{
			id: 3,
			Stream_title: "Stream title here",
			Name: "Christine",
			IsLive: true,
			Viewers: "43K",
			verified_account: true,
			thumbnail: Stream3,
			profile_img: stream_img_1,
			star: null,
		},
	];
	const Follwoing = [
		{
			id: 2,
			Stream_title: "Stream title here",
			Name: "Christine Barton ",
			IsLive: true,
			Viewers: "43K",
			verified_account: false,
			thumbnail: Following1,
			profile_img: stream_img_1,
			star: null,
		},
		{
			id: 3,
			Stream_title: "Stream title here",
			Name: "Nathan ",
			IsLive: true,
			Viewers: "43K",
			verified_account: true,
			thumbnail: Following2,
			profile_img: following_admin_img2,
			star: null,
		},
		{
			id: 3,
			Stream_title: "Stream title here",
			Name: "Howard Barton",
			IsLive: true,
			Viewers: "43K",
			verified_account: false,
			thumbnail: Following3,
			profile_img: following_admin_img3,
			star: null,
		},
		{
			id: 3,
			Stream_title: "Stream title here",
			Name: "Christine ",
			IsLive: true,
			Viewers: "43K",
			verified_account: false,
			thumbnail: Following4,
			profile_img: stream_img_1,
			star: null,
		},
	];
	// sories starts here
	const stories = [
		{
			id: 1,
			name: "Miss Liar ",
			thumbnail: story1,
			profile_img: storyadmin1,
		},
		{
			id: 2,
			name: "Cathline07 ",
			thumbnail: story2,
			profile_img: storyadmin2,
		},
		{
			id: 3,
			name: "Christine ",
			thumbnail: story3,
			profile_img: storyadmin3,
		},
		{
			id: 4,
			name: "Sara John",
			thumbnail: story4,
			profile_img: storyadmin4,
		},
		{
			id: 5,
			name: "Scott Williams",
			thumbnail: story5,
			profile_img: storyadmin5,
		},
		{
			id: 6,
			name: "Sara John",
			thumbnail: story1,
			profile_img: storyadmin1,
		},
	];
	// sories ends here
	// buddies name starts here
	const buddies = [
		{
			id: 1,
			name: "Howard Barton",
			profile_img: buddies1,
			isOnline: true,
			Stories: true,
		},
		{
			id: 2,
			name: "robintallrothh ",
			profile_img: buddies2,
			isOnline: true,
			Stories: true,
		},
		{
			id: 3,
			name: "lauren",
			profile_img: buddies3,
			isOnline: true,
			Stories: true,
		},
		{
			id: 4,
			name: "michealholding2",
			profile_img: buddies4,
			isOnline: true,
			Stories: true,
		},
		{
			id: 5,
			name: "Howard Barton",
			profile_img: buddies5,
			isOnline: false,
			Stories: true,
		},
		{
			id: 6,
			name: "robintallrothh ",
			profile_img: buddies6,
			isOnline: false,
			Stories: true,
		},
		{
			id: 7,
			name: "lauren",
			profile_img: buddies7,
			isOnline: false,
			Stories: true,
		},
		{
			id: 8,
			name: "Howard Barton",
			profile_img: buddies8,
			isOnline: false,
			Stories: true,
		},
		{
			id: 9,
			name: "michealholding2",
			profile_img: buddies9,
			isOnline: false,
			Stories: true,
		},
		{
			id: 10,
			name: "robintallrothh ",
			profile_img: buddies2,
			isOnline: false,
			Stories: true,
		},
		{
			id: 11,
			name: "lauren",
			profile_img: buddies3,
			isOnline: false,
			Stories: true,
		},
		{
			id: 12,
			name: "michealholding2",
			profile_img: buddies4,
			isOnline: false,
			Stories: true,
		},
		{
			id: 13,
			name: "Howard Barton",
			profile_img: buddies5,
			isOnline: true,
			Stories: true,
		},
		{
			id: 14,
			name: "robintallrothh",
			profile_img: buddies6,
			isOnline: true,
			Stories: true,
		},
	];
	// buddies name ends here
	return (
		<>
			{/* header starts here */}
			<Header />
			{/* header ends here */}

			{/* stories starts here */}
			<section className="stories-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="slider-and-create-story-wrapper">
								<div className="row">
									<div className="col-lg-2">
										<div className="create-story-card-wrapper">
											<div className="create-story-img">
												<figure>
													<img src={story_img} className="img-fluid" alt="" />
												</figure>
											</div>
											<div className="create-story-content-wrapper">
												<i className="fa fa-plus"></i>
												<h4>Create story</h4>
											</div>
										</div>
									</div>
									<div className="col-lg-10">
										<Slider {...settings}>
											{stories.map((data, index) => {
												return (
													<>
														<div
															onClick={() => navigate("/story")}
															key={index}
															className="friends-story-card-wrapper"
														>
															<div className="friends-story-img">
																<figure>
																	<img
																		src={data?.thumbnail}
																		className="img-fluid"
																		alt=""
																	/>
																</figure>
															</div>
															<div className="friends-story-content-wrapper">
																<img src={data?.profile_img} alt="" />
																<h4>{data?.name}</h4>
															</div>
														</div>
													</>
												);
											})}
										</Slider>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* stories ends here */}
			{/* status sec wrappper starts here */}
			<section className="status-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="status-card-wrapper">
								<div
									className="status-field-and-profile-wrapper"
									onClick={handleShow}
								>
									<div className="status-profile-wrapper">
										<img src={profile_img} className="img-fluid" alt="" />
									</div>
									<div className="status-field-wrapper">
										<input
											type="text"
											placeholder="What's on your mind, lauren?"
											className="form-control"
										/>
									</div>
								</div>
								<div className="status-list-wrapper">
									<div className="live-btn-wrapper">
										<button
											type="button"
											className="btn"
											data-bs-toggle="modal"
											data-bs-target="#BrodcastModal"
										>
											<img src={live} className="img-fluid" alt="" />
											Live video
										</button>
									</div>
									<div className="live-btn-wrapper">
										<button type="button">
											<img src={photos} className="img-fluid" alt="" />
											Photos
										</button>
									</div>
									<div className="live-btn-wrapper">
										<button type="button">
											<img src={bxsmile} className="img-fluid" alt="" />
											Feeling
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="invited-wrapper">
								<div className="invited-heading-wrapper">
									<h5>Invite Friend</h5>
									<h6>Invite Earn 1000 nugs.</h6>
									<button
										className="btn"
										onClick={() => navigate("/invite-link")}
									>
										Invite friends
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* status sec wrappper ends here */}
			{/* newsfeeds wrapper starts here */}
			<section className="newsfeed">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="post-feed-wrapper">
								<div className="feed-profile-wrapper">
									<div className="feed-img-wrapper">
										<figure>
											<img
												src={friend_profile_img}
												className="img-fluid"
												alt=""
											/>
										</figure>
									</div>
									<div className="feed-name-wrapper">
										<h4>
											{" "}
											<a href="#">Ents-Plug</a>{" "}
										</h4>
										<h6>2 hr</h6>
									</div>
									<div className="more-option-wrapper">
										<div className="dropdown">
											<button
												className="btn btn-secondary dropdown-toggle"
												type="button"
												id="dropdownMenuButton"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false"
											>
												<i className="fa fa-ellipsis-v"></i>
											</button>
											<div
												className="dropdown-menu"
												aria-labelledby="dropdownMenuButton"
											>
												<a className="dropdown-item" href="#">
													Report
												</a>
												<a className="dropdown-item" href="#">
													hide
												</a>
												<a className="dropdown-item" href="#">
													share
												</a>
												<a className="dropdown-item" href="#">
													copy link
												</a>
												<a className="dropdown-item" href="#">
													unfollow
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="feed-des-wrapper">
									<button className="hash-tag">#relax, #travel</button>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
								<div className="feed-img-wrapper">
									<figure>
										<img src={newsfeed1} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="likes-comment-share-wrapper">
									<div className="likes-wrapper">
										<button className="likes">
											<img src={likes} alt="" />
											<span className="total-like">1125</span>
										</button>
									</div>
									<div className="comment-wrapper">
										<button className="comment">
											<img src={comment} alt="" />
											<span className="total-comment">348</span>
										</button>
									</div>
									<div className="share-wrapper">
										<button className="share">
											<img src={share} alt="" />
											<span className="total-share">20</span>
										</button>
									</div>
								</div>
								<div className="comments-wrapper">
									<div className="single-comment-wrapper">
										<div className="single-comment-img-wrapper">
											<img src={comment1} className="comment-img" alt="" />
										</div>
										<div className="comment-content-wrapper">
											<h6 className="profile-name">
												<a href="#">Howard Barton</a>
											</h6>
											<p className="comment-des">
												Tag a fella that loves canna products (Via: @ents-plug )
											</p>
										</div>
									</div>
									<div className="single-comment-wrapper">
										<div className="single-comment-img-wrapper">
											<img src={comment2} className="comment-img" alt="" />
										</div>
										<div className="comment-content-wrapper">
											<h6 className="profile-name">
												<a href="#">robintallrothh</a>
											</h6>
											<p className="comment-des">Billy from stranger things</p>
										</div>
									</div>
									<div className="single-comment-wrapper">
										<div className="single-comment-img-wrapper">
											<img src={comment3} className="comment-img" alt="" />
										</div>
										<div className="comment-content-wrapper">
											<h6 className="profile-name">
												<a href="#">lauren </a>
											</h6>
											<p className="comment-des">Wow hairstyle so funny</p>
										</div>
									</div>
									<div className="single-comment-wrapper">
										<div className="single-comment-img-wrapper">
											<img src={comment4} className="comment-img" alt="" />
										</div>
										<div className="comment-content-wrapper">
											<h6 className="profile-name">
												<a href="#">michealholding2 </a>
											</h6>
											<p className="comment-des">
												I've been wondering since long time, what is the exact
												full form of ENTS?
											</p>
										</div>
									</div>
								</div>
								<div className="post-comment-wrapper">
									<div className="emoji-wrapper">
										<figure>
											<img src={comment_emoji} alt="" />
										</figure>
									</div>
									<div className="post-content-wrapper">
										<input
											type="text"
											className="form-control"
											placeholder="Add Comment"
										/>
									</div>
									<div className="post-btn-wrapper">
										<button className="btn">Post</button>
									</div>
								</div>
							</div>
							<div className="post-feed-wrapper">
								<div className="feed-profile-wrapper">
									<div className="feed-img-wrapper">
										<figure>
											<img
												src={friend_profile_img}
												className="img-fluid"
												alt=""
											/>
										</figure>
									</div>
									<div className="feed-name-wrapper">
										<h4>
											{" "}
											<a href="#">Ents-Plug</a>{" "}
										</h4>
										<h6>2 hr</h6>
									</div>
									<div className="more-option-wrapper">
										<div className="dropdown">
											<button
												className="btn btn-secondary dropdown-toggle"
												type="button"
												id="dropdownMenuButton"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false"
											>
												<i className="fa fa-ellipsis-v"></i>
											</button>
											<div
												className="dropdown-menu"
												aria-labelledby="dropdownMenuButton"
											>
												<a className="dropdown-item" href="#">
													Report
												</a>
												<a className="dropdown-item" href="#">
													hide
												</a>
												<a className="dropdown-item" href="#">
													share
												</a>
												<a className="dropdown-item" href="#">
													copy link
												</a>
												<a className="dropdown-item" href="#">
													unfollow
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="feed-des-wrapper">
									<p>
										Weeeeeeeeeeeeeee...........
										<br />
										Follow us at https://linktr.ee/EntsPlug for more
									</p>
									<button className="hash-tag">
										#CannabisContentCreators #Ganjapreneurs
									</button>
								</div>
								<div className="feed-img-wrapper">
									<figure>
										<img src={newsfeed2} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="likes-comment-share-wrapper">
									<div className="likes-wrapper">
										<button className="likes">
											<img src={likes} alt="" />
											<span className="total-like">1125</span>
										</button>
									</div>
									<div className="comment-wrapper">
										<button className="comment">
											<img src={comment} alt="" />
											<span className="total-comment">348</span>
										</button>
									</div>
									<div className="share-wrapper">
										<button className="share">
											<img src={share} alt="" />
											<span className="total-share">20</span>
										</button>
									</div>
								</div>
								<div className="comments-wrapper">
									<div className="single-comment-wrapper">
										<div className="single-comment-img-wrapper">
											<img src={comment1} className="comment-img" alt="" />
										</div>
										<div className="comment-content-wrapper">
											<h6 className="profile-name">
												<a href="#">Howard Barton</a>
											</h6>
											<p className="comment-des">
												Tag a fella that loves canna products (Via: @ents-plug )
											</p>
										</div>
									</div>
									<div className="single-comment-wrapper">
										<div className="single-comment-img-wrapper">
											<img src={comment2} className="comment-img" alt="" />
										</div>
										<div className="comment-content-wrapper">
											<h6 className="profile-name">
												<a href="#">robintallrothh</a>
											</h6>
											<p className="comment-des">Billy from stranger things</p>
										</div>
									</div>
									<div className="single-comment-wrapper">
										<div className="single-comment-img-wrapper">
											<img src={comment3} className="comment-img" alt="" />
										</div>
										<div className="comment-content-wrapper">
											<h6 className="profile-name">
												<a href="#">lauren </a>
											</h6>
											<p className="comment-des">Wow hairstyle so funny</p>
										</div>
									</div>
									<div className="single-comment-wrapper">
										<div className="single-comment-img-wrapper">
											<img src={comment4} className="comment-img" alt="" />
										</div>
										<div className="comment-content-wrapper">
											<h6 className="profile-name">
												<a href="#">michealholding2 </a>
											</h6>
											<p className="comment-des">
												I've been wondering since long time, what is the exact
												full form of ENTS?
											</p>
										</div>
									</div>
								</div>
								<div className="post-comment-wrapper">
									<div className="emoji-wrapper">
										<figure>
											<img src={comment_emoji} alt="" />
										</figure>
									</div>
									<div className="post-content-wrapper">
										<input
											type="text"
											className="form-control"
											placeholder="Add Comment"
										/>
									</div>
									<div className="post-btn-wrapper">
										<button className="btn">Post</button>
									</div>
								</div>
							</div>
							<div className="post-feed-wrapper">
								<div className="feed-profile-wrapper">
									<div className="feed-img-wrapper">
										<figure>
											<img
												src={friend_profile_img}
												className="img-fluid"
												alt=""
											/>
										</figure>
									</div>
									<div className="feed-name-wrapper">
										<h4>
											{" "}
											<a href="#">Ents-Plug</a>{" "}
										</h4>
										<h6>2 hr</h6>
									</div>
									<div className="more-option-wrapper">
										<div className="dropdown">
											<button
												className="btn btn-secondary dropdown-toggle"
												type="button"
												id="dropdownMenuButton"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false"
											>
												<i className="fa fa-ellipsis-v"></i>
											</button>
											<div
												className="dropdown-menu"
												aria-labelledby="dropdownMenuButton"
											>
												<a className="dropdown-item" href="#">
													Report
												</a>
												<a className="dropdown-item" href="#">
													hide
												</a>
												<a className="dropdown-item" href="#">
													share
												</a>
												<a className="dropdown-item" href="#">
													copy link
												</a>
												<a className="dropdown-item" href="#">
													unfollow
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="feed-des-wrapper">
									<button className="hash-tag">#relax, #travel</button>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</div>
								<div className="feed-img-wrapper">
									<figure>
										<img src={newsfeed3} className="img-fluid" alt="" />
									</figure>
								</div>
								<div className="likes-comment-share-wrapper">
									<div className="likes-wrapper">
										<button className="likes">
											<img src={likes} alt="" />
											<span className="total-like">1125</span>
										</button>
									</div>
									<div className="comment-wrapper">
										<button className="comment">
											<img src={comment} alt="" />
											<span className="total-comment">348</span>
										</button>
									</div>
									<div className="share-wrapper">
										<button className="share">
											<img src={share} alt="" />
											<span className="total-share">20</span>
										</button>
									</div>
								</div>
								{/* <div className="comments-wrapper">
									<div className="single-comment-wrapper">
										<div className="single-comment-img-wrapper">
											<img src={comment1} className="comment-img" alt="" />
										</div>
										<div className="comment-content-wrapper">
											<h6 className="profile-name">
												<a href="#">Howard Barton</a>
											</h6>
											<p className="comment-des">
												Tag a fella that loves canna products (Via: @ents-plug )
											</p>
										</div>
									</div>
									<div className="single-comment-wrapper">
										<div className="single-comment-img-wrapper">
											<img src={comment2} className="comment-img" alt="" />
										</div>
										<div className="comment-content-wrapper">
											<h6 className="profile-name">
												<a href="#">robintallrothh</a>
											</h6>
											<p className="comment-des">Billy from stranger things</p>
										</div>
									</div>
									<div className="single-comment-wrapper">
										<div className="single-comment-img-wrapper">
											<img src={comment3} className="comment-img" alt="" />
										</div>
										<div className="comment-content-wrapper">
											<h6 className="profile-name">
												<a href="#">lauren </a>
											</h6>
											<p className="comment-des">Wow hairstyle so funny</p>
										</div>
									</div>
									<div className="single-comment-wrapper">
										<div className="single-comment-img-wrapper">
											<img src={comment4} className="comment-img" alt="" />
										</div>
										<div className="comment-content-wrapper">
											<h6 className="profile-name">
												<a href="#">michealholding2 </a>
											</h6>
											<p className="comment-des">
												I've been wondering since long time, what is the exact
												full form of ENTS?
											</p>
										</div>
									</div>
								</div> */}
								<div className="post-comment-wrapper">
									<div className="emoji-wrapper">
										<figure>
											<img src={comment_emoji} alt="" />
										</figure>
									</div>
									<div className="post-content-wrapper">
										<input
											type="text"
											className="form-control"
											placeholder="Add Comment"
										/>
									</div>
									<div className="post-btn-wrapper">
										<button className="btn">Post</button>
									</div>
								</div>
							</div>
							<div className="pagination-wrapper">
								<div className="pagination-list-wrapper">
									<ul>
										<li className="pagination-item">
											<button className="pagination-btn active">1</button>
										</li>
										<li className="pagination-item">
											<button className="pagination-btn">2</button>
										</li>
										<li className="pagination-item">
											<button className="pagination-btn">3</button>
										</li>
										<li className="pagination-item">
											<button className="pagination-btn">4</button>
										</li>
										<li className="pagination-item">
											<button className="pagination-btn">5</button>
										</li>
										<li className="pagination-item">
											<button className="pagination-btn">10</button>
										</li>
										<li className="pagination-item">
											<button className="pagination-btn next-btn">
												Next <i className="fa fa-angle-right"></i>
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="budddies-wrapper">
								<div className="buddies-heading-wrapper">
									<h4>Buddies</h4>
								</div>
								{buddies.map((data, index) => {
									return (
										<div key={index} className="buddies-list-wrapper">
											<div className="buddies-single-wrapper">
												<img
													src={data?.profile_img}
													className="buddy-img"
													alt=""
												/>

												<div className="active"></div>
											</div>

											<div className="buddy-name-wrapper">
												<div className="dropdown">
													<button
														className="btn btn-secondary dropdown-toggle"
														type="button"
														id="dropdownMenuButton"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														<h6>{data?.name}</h6>
													</button>
													<div
														className="dropdown-menu"
														aria-labelledby="dropdownMenuButton"
													>
														<a className="dropdown-item" href="#">
															<i className="fa fa-user"></i> View Profile
														</a>
														<a className="dropdown-item" href="#">
															<i className="fa fa-comment"></i> Message
														</a>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* newsfeeds wrapper ends here */}
			{/* newsletter starts here */}
			<Newslettter />
			{/* newsletter ends here */}
			{/* footer starts here */}
			<Footer />
			{/* footer ends here */}
			{/* create post modal starts here */}
			<Modal className="Create-Post" show={show} onHide={handleClose}>
				<Modal.Header closeButton={"hvbhy"}>
					<Modal.Title>Create post</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="Post-Modal-sec">
						<div className="modal-profile-wrapper">
							<div className="modal-img-wrapper">
								<img src={profile_img} alt="" />
							</div>
							<div className="profile-content-wrapper">
								<h5>Darrell Bailey</h5>
								<select name="" id="">
									<option value="Public">
										<i className="fa fa-globe" aria-hidden="true"></i> Public{" "}
									</option>
								</select>
							</div>
						</div>
					</div>
					<div className="mind-sec-wrapper">
						<div className="mind-field-wrapper">
							<textarea
								name=""
								id=""
								cols="30"
								placeholder="What's on your mind, Darell?"
								className="form-control"
								rows="5"
							></textarea>
						</div>
						<div className="add-to-post">
							<div className="post-heading">
								<h6>Add to your post</h6>
							</div>
							<div className="attachments-wrapper">
								<ul>
									<li>
										<div className="file-wrapper">
											<button onClick={() => openFileSelector()}>
												<img src={video_btn} />
											</button>
										</div>
									</li>
									<li>
										<div className="file-wrapper">
											<button onClick={() => openFileSelector()}>
												<img src={gallery_btn} />
											</button>
										</div>
									</li>
									<li>
										<div className="file-wrapper">
											<button onClick={() => openFileSelector()}>
												<img src={attchment_img} />
											</button>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="post-btn-wrapper">
							<button className="btn  form-control">Post</button>
						</div>
					</div>

					<br />

					{filesContent.map((file, index) => (
						<>
							{console.log(file)}
							<div>
								<h2>{file.name}</h2>
								{/* <div key={index}>{file.content}</div> */}
								{/* <img source={{ uri: Base64.decode(file.content) }} /> */}
								<br />
							</div>
						</>
					))}
				</Modal.Body>
			</Modal>
			{/* create post modal end here */}
		</>
	);
};

export default Home2;
