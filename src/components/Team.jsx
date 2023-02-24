import React from 'react'
import TeamComp from './TeamComp'

function Team() {
    const divStyle = {
        backgroundImage: 'url(./assets/images/team/Team-Bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
  return (
    <div className='bg-blue-1 relative  ' id='team'>
          {/*Laptop */}
          <div className='hidden lg:block ' style={divStyle}>
                <img src="./assets/images/team/Laptop-team.png" alt="team" className='absolute -top-10 right-0' />
              <div className='flex justify-between'>
                  <div className='w-4/5 mx-auto'>
                      <div className='py-16'>
                          <div>
                              <div>
                                  <p className='text-black font-bold text-base text-center opacity-60 tracking-widest'>TEAM</p>
                                  <h1 className='text-black font-bold text-5xl text-center mt-5'>MEET THE TEAM</h1>
                              </div>
                              <div className='flex mx-auto gap-10 justify-center mt-16'>
                                  <div>
                                      <TeamComp
                                          img={"./assets/images/team/Sid.png"}
                                          designation={"CEO"}
                                          name={"SIDDHARTH NAIR"}
                                          tagline={"A bearded corporate fixer"}
                                          linkedin={"https://www.linkedin.com/in/siddharth-nair-b30a3413b"}
                                          mail={"siddharth@bravasdigital.com"} />
                                  </div>
                                  <div >
                                      <TeamComp
                                          img={"./assets/images/team/Vaishnav.png"}
                                          designation={"COO"}
                                          name={"VAISHNAV MANAV"}
                                          tagline={"Work. Invest. Explore in that order"}
                                          linkedin={"https://www.linkedin.com/in/vaishnav-manav/"}
                                          mail={"vaishnav@bravasdigital.com"} />
                                  </div>
                                  <div>
                                      <TeamComp img={"./assets/images/team/Sandeep.png"}
                                          designation={"Advisor"}
                                          name={"SANDEEP TELANG"}
                                          tagline={"Working up my way up Maslow’s pyramid"}
                                          linkedin={"https://www.linkedin.com/in/sandeeptelang/"} />
                                  </div>
                              </div>
                              <div className='flex mx-auto gap-10 justify-center mt-10'>
                                  <div>
                                      <TeamComp img={"./assets/images/team/Krishna.png"}
                                          designation={"Digital Marketing Manager"}
                                          name={"KRISHNA RAO"}
                                          tagline={"I believe in ideating new campaigns even in my sleep"}
                                          linkedin={"https://www.linkedin.com/in/krishna-rao-85ab6a15a"} />
                                  </div>
                                  <div >
                                      <TeamComp img={"./assets/images/team/Gorashi.png"}
                                          designation={"Digital Marketing Manager"}
                                          name={"GORANSHI JAIN"}
                                          tagline={"CREATE. CURATE. CAMPAIGN."}
                                          linkedin={"https://www.linkedin.com/in/goranshi-jain-857b6715a"} />
                                  </div>
                                  <div>
                                      <TeamComp img={"./assets/images/team/Omi.png"}
                                          designation={"Senior Graphic Designer"}
                                          name={"OMKESH HODAWADEKAR"}
                                          tagline={"Design is so simple, that’s why it’s so complicated"}
                                          linkedin={"https://www.linkedin.com/in/omi-hodawadekar-31765ba0/"} />
                                  </div>
                              </div>
                              <div className='flex mx-auto gap-10 justify-center mt-10'>
                                  <div>
                                      <TeamComp img={"./assets/images/team/Aniket.png"}
                                          designation={"Junior Graphic Designer"}
                                          name={"ANIKET PATIL"}
                                          tagline={"I love everything about Design except, it changes"} 
                                          linkedin={"https://www.linkedin.com/in/aniket-patil-b35852143"}/>
                                  </div>
                                  <div >
                                      <TeamComp img={"./assets/images/team/Sourabh.png"}
                                          designation={"SEO Lead"}
                                          name={"SOURABH RAUL"}
                                          tagline={"Empowering online visibility"}
                                          linkedin={""} />
                                  </div>
                                  <div>
                                      <TeamComp img={"./assets/images/team/Mahek1.png"}
                                          designation={"Digital Marketing Executive"}
                                          name={"MAHEK SACHDEVA"}
                                          tagline={"The 3 C's of Success : Commitment, Consistency and Confidence"} 
                                          linkedin={"https://www.linkedin.com/in/mahek-sachdeva-3b93a0235"}/>
                                  </div>
                              </div>
                              <div className='flex mx-auto gap-10 justify-center mt-10'>
                                  <div>
                                      <TeamComp img={"./assets/images/team/Rishita1.png"}
                                          designation={"Digital Marketing Executive"}
                                          name={"RISHITA HAREL"}
                                          tagline={"Self-belief and Hard work will always earn you success"} 
                                          linkedin={"https://www.linkedin.com/in/rishita-harel-77b672207"}/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <img src="/assets/images/team/Keyboard.png" alt="puzzle-block" className='absolute bottom-10 left-0 mix-blend-multiply' />
         
          </div>
          {/*Mobiles-lg*/}
          <div className='lg:hidden pb-6'>
             
              <img src="/assets/images/team/Pencil.png" alt="pencil-image" className='absolute right-2 w-1/6  ' />
              <img src="/assets/images/team/Block.png" alt="puzzle-block" className='absolute -bottom-2 left-2 h-20 w-20' />
              <div className='py-16'>
                  <div>
                      <div>
                          <p className='text-black font-bold text-xs sm:text-sm text-center tracking-widest opacity-60'>TEAM</p>
                          <h1 className='text-black font-bold text-2xl sm:text-3xl text-center mt-2'>MEET THE TEAM</h1>
                      </div>
                      <div className='grid grid-cols-2 mx-6 sm:mx-12 gap-y-10 gap-x-4  mt-10 justify-items-center'>
                          <div>
                              <TeamComp
                                  img={"./assets/images/team/Sid.png"}
                                  designation={"CEO"}
                                  name={"SIDDHARTH NAIR"}
                                  tagline={"A bearded corporate fixer"} 
                                  linkedin={"https://www.linkedin.com/in/siddharth-nair-b30a3413b"}
                                  mail={"siddharth@bravasdigital.com"}/>
                          </div>
                          <div >
                              <TeamComp
                                  img={"./assets/images/team/Vaishnav.png"}
                                  designation={"COO"}
                                  name={"VAISHNAV MANAV"}
                                  tagline={"Work. Invest. Explore in that order"}
                                  linkedin={"https://www.linkedin.com/in/vaishnav-manav/"}
                                  mail={"vaishnav@bravasdigital.com"} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Sandeep.png"}
                                  designation={"Advisor"}
                                  name={"SANDEEP TELANG"}
                                  tagline={"Working up my way up Maslow’s pyramid"}
                                  linkedin={"https://www.linkedin.com/in/sandeeptelang/"} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Krishna.png"}
                                  designation={"Digital Marketing Manager"}
                                  name={"KRISHNA RAO"}
                                  tagline={"I believe in ideating new campaigns even in my sleep"} 
                                  linkedin={"https://www.linkedin.com/in/krishna-rao-85ab6a15a"}/>
                          </div>
                          <div >
                              <TeamComp img={"./assets/images/team/Gorashi.png"}
                                  designation={"Digital Marketing Manager"}
                                  name={"GORANSHI JAIN"}
                                  tagline={"CREATE. CURATE. CAMPAIGN."}
                                  linkedin={"https://www.linkedin.com/in/goranshi-jain-857b6715a"} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Omi.png"}
                                  designation={"Senior Graphic Designer"}
                                  name={"OMKESH HODAWADEKAR"}
                                  tagline={"Design is so simple, that’s why it’s so complicated"}
                                  linkedin={"https://www.linkedin.com/in/omi-hodawadekar-31765ba0/"} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Aniket.png"}
                                  designation={"Junior Graphic Designer"}
                                  name={"ANIKET PATIL"}
                                  tagline={"I love everything about Design except, it changes"} 
                                  linkedin={"https://www.linkedin.com/in/aniket-patil-b35852143"}/>
                          </div>
                          <div >
                              <TeamComp img={"./assets/images/team/Sourabh.png"}
                                  designation={"SEO Lead"}
                                  name={"SOURABH RAUL"}
                                  tagline={"Empowering online visibility"}
                                  linkedin={""} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Mahek1.png"}
                                  designation={"Digital Marketing Executive"}
                                  name={"MAHEK SACHDEVA"}
                                  tagline={"The 3 C's of Success : Commitment, Consistency and Confidence"}
                                  linkedin={"https://www.linkedin.com/in/mahek-sachdeva-3b93a0235"} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Rishita1.png"}
                                  designation={"Digital Marketing Executive"}
                                  name={"RISHITA HAREL"}
                                  tagline={"Self-belief and Hard work will always earn you success"}
                                  linkedin={"https://www.linkedin.com/in/rishita-harel-77b672207"} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          
    </div>
  )
}

export default Team
