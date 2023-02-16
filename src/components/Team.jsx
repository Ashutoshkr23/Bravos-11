import React from 'react'
import TeamComp from './TeamComp'

function Team() {
  return (
    <div className='bg-blue-1 relative  ' id='team'>
          {/*Laptop */}
          <div className='hidden lg:block'>

              <img src="/assets/images/team/Pencil.png" alt="pencil-image" className='absolute right-4' />
              <img src="/assets/images/team/Puzzle.png" alt="puzzle-block" className='absolute -bottom-6 left-16 ' />
              <div className='py-16'>
                  <div>
                      <div>
                          <p className='text-black font-light text-base text-center tracking-widest'>TEAM</p>
                          <h1 className='text-black font-bold text-5xl text-center mt-5'>MEET THE TEAM</h1>
                      </div>
                      <div className='flex mx-auto gap-10 justify-center mt-16'>
                          <div>
                              <TeamComp
                                  img={"./assets/images/team/Sid.png"}
                                  designation={"CEO"}
                                  name={"SIDDHART NAIR"}
                                  tagline={"A bearded corporate fixer"} />
                          </div>
                          <div >
                              <TeamComp
                                  img={"./assets/images/team/Vaishnav.png"}
                                  designation={"COO"}
                                  name={"VAISHNAV"}
                                  tagline={"Work Invest Explore in that order"} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Sandeep.png"}
                                  designation={"Advisor"}
                                  name={"SANDEEP TELANG"}
                                  tagline={"Working up my way up Maslow’s pyramid"} />
                          </div>
                      </div>
                      <div className='flex mx-auto gap-10 justify-center mt-10'>
                          <div>
                              <TeamComp img={"./assets/images/team/Krishna.png"}
                                  designation={"Digital Marketing Manager"}
                                  name={"KRISHNA RAO"}
                                  tagline={"I believe in ideating new campaigs even in my sleep"} />
                          </div>
                          <div >
                              <TeamComp img={"./assets/images/team/Gorashi.png"}
                                  designation={"Digital Marketing Manager"}
                                  name={"GORANSHI JAIN"}
                                  tagline={"Create Curate Campaign"} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Omi.png"}
                                  designation={"Senior Graphic Designer"}
                                  name={"OMKESH HODAWADEKAR"}
                                  tagline={"Design is so simple, that's why it's so complicated"} />
                          </div>
                      </div>
                      <div className='flex mx-auto gap-10 justify-center mt-10'>
                          <div>
                              <TeamComp img={"./assets/images/team/Aniket.png"}
                                  designation={"junior Graphic Designer"}
                                  name={"ANIKET PATIL"}
                                  tagline={"I love everything abot Design except, it changes"} />
                          </div>
                          <div >
                              <TeamComp img={"./assets/images/team/Sourabh.png"}
                                  designation={"SEO Lead"}
                                  name={"SOURABH RAUL"}
                                  tagline={"Empowering online visibility"} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Mahek1.png"}
                                  designation={"Digital Marketing Excutive"}
                                  name={"MAHEK SACHDEVA"}
                                  tagline={"The 3 C s of Success : Commitment, Consistency and Confidence"} />
                          </div>
                      </div>
                      <div className='flex mx-auto gap-10 justify-center mt-10'>
                          <div>
                              <TeamComp img={"./assets/images/team/Rishita1.png"}
                                  designation={"Digital Marketing Excutive"}
                                  name={"RISHITA HAREL"}
                                  tagline={"Self-belief and Hard work will always earn you sucess"} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/*Mobiles-lg*/}
          <div className='lg:hidden'>
             
              <img src="/assets/images/team/Pencil.png" alt="pencil-image" className='absolute right-2 w-1/6  ' />
              <img src="/assets/images/team/Block.png" alt="puzzle-block" className='absolute -bottom-2 left-2 h-20 w-20' />
              <div className='py-16'>
                  <div>
                      <div>
                          <p className='text-black font-light text-xs sm:text-sm text-center tracking-widest'>TEAM</p>
                          <h1 className='text-black font-bold text-2xl sm:text-3xl text-center mt-2'>MEET THE TEAM</h1>
                      </div>
                      <div className='grid grid-cols-2 mx-6 sm:mx-12 gap-y-10 gap-x-4  mt-10 justify-items-center'>
                          <div>
                              <TeamComp
                                  img={"./assets/images/team/Sid.png"}
                                  designation={"CEO"}
                                  name={"SIDDHART NAIR"}
                                  tagline={"A bearded corporate fixer"} />
                          </div>
                          <div >
                              <TeamComp
                                  img={"./assets/images/team/Vaishnav.png"}
                                  designation={"COO"}
                                  name={"VAISHNAV"}
                                  tagline={"Work Invest Explore in that order"} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Sandeep.png"}
                                  designation={"Advisor"}
                                  name={"SANDEEP TELANG"}
                                  tagline={"Working up my way up Maslow’s pyramid"} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Krishna.png"}
                                  designation={"Digital Marketing Manager"}
                                  name={"KRISHNA RAO"}
                                  tagline={"I believe in ideating new campaigs even in my sleep"} />
                          </div>
                          <div >
                              <TeamComp img={"./assets/images/team/Gorashi.png"}
                                  designation={"Digital Marketing Manager"}
                                  name={"GORANSHI JAIN"}
                                  tagline={"Create Curate Campaign"} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Omi.png"}
                                  designation={"Senior Graphic Designer"}
                                  name={"OMKESH HODAWADEKAR"}
                                  tagline={"Design is so simple, that's why it's so complicated"} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Aniket.png"}
                                  designation={"junior Graphic Designer"}
                                  name={"ANIKET PATIL"}
                                  tagline={"I love everything abot Design except, it changes"} />
                          </div>
                          <div >
                              <TeamComp img={"./assets/images/team/Sourabh.png"}
                                  designation={"SEO Lead"}
                                  name={"SOURABH RAUL"}
                                  tagline={"Empowering online visibility"} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Mahek1.png"}
                                  designation={"Digital Marketing Excutive"}
                                  name={"MAHEK SACHDEVA"}
                                  tagline={"The 3 C s of Success : Commitment, Consistency and Confidence"} />
                          </div>
                          <div>
                              <TeamComp img={"./assets/images/team/Rishita1.png"}
                                  designation={"Digital Marketing Excutive"}
                                  name={"RISHITA HAREL"}
                                  tagline={"Self-belief and Hard work will always earn you sucess"} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          
    </div>
  )
}

export default Team
