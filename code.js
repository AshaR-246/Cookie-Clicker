var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8b93a07a-fc5e-4d9b-af41-4a5851ab36b2","d52b81c1-317e-4bfc-bcab-0196d3b94a30","76780546-ba83-4a70-8823-e2937f8d2dc2","63cb4649-3ccb-4dfe-95a2-62d85f1affeb","64962777-e725-4f68-bc7d-129ca4fba44b","ebf1c1a5-0853-4cbb-9881-b7ed12e06079","978a850a-4fe7-48b5-a3b3-888169a61b4d","bbd11ada-750b-4be9-a22b-7f71049efd2d","1a09d449-c194-4140-a352-8131a2bcec0b","d4e7877f-b28e-4f48-b5f9-f68088bec724","8eb0ed8a-d7ef-46ea-aa10-6da1c1b045fe","64bc3de5-fa12-435c-a606-deea1570ab75","595dc56d-d340-44de-9643-09baae46e9fb","69e2697d-2369-4e57-a5f6-6f9802609130","a4dfd76a-c982-4e26-b7bc-e8ce4db20287","4191bc0a-074c-485a-935c-d159f30ec547","69542dd0-1b30-45cb-96d9-d0de3c264ea9","fbf337ff-5256-478c-b817-7ca2903c9c90","05ca36e6-dd04-4ffb-8adc-d92e3b93376a","2252afd2-897c-4944-b2b6-617e5b714b50","08553682-af32-4db6-8a66-d8304aff4373","dd600221-58b6-4a2e-a847-b002d06fd70d","1ae636e9-548c-4a93-b464-6a56cdbe9b48","3d55c1f1-aef1-4606-81ca-f04f1c3efa13","aaa0fedf-181b-40dc-bb59-6bfc3b5c1139","81c357b2-dbc4-4474-8c66-fc9d270430c9","afd130cb-bf2d-4041-afb2-3de766004f4e","64b3102f-8281-49e9-aa25-42f5079be216","515592b1-4119-4ae4-9ebf-cffda6f17fcc","afdb1794-322b-4f62-b849-e22e3b3e3a8a","3d539d40-0b4f-4f3c-bbd5-b036f4ad45de","ff558c8f-f6af-45af-b13d-51fb6f9f5ce4","dd9f8a54-776a-4b95-8a93-97a8b4bcd609","65cb6f49-c635-49ad-8b6b-a93711b8dd2f","cc37dec2-1ce3-4a70-a675-e3d5a5c47396","fa8c82a8-cfc1-451b-8e48-ba7e527389ad","11d769e6-15c4-423e-ac07-6ab26297936a","00212f2b-3eb9-4d15-93e4-7d30395eefad","92d63a5a-aed7-460c-862d-a9abe875e578","6ea93a4c-ef5f-4fa9-8b25-40428e03523a","3806bbdd-1ef1-46fb-a4f7-5770614a47cb","551e5283-67d8-4e48-a778-7744597c6c46","0ffefc05-5996-435f-871f-d7f40f26ce69","9579bcd9-ebfe-4ae3-94a8-4abcf67b9cd3","515b24a4-9f28-491a-9128-24127b6e26dd","8e7c5afa-b23e-4a3c-9637-4e20c7e6831e","30a712db-887d-42b7-acfd-a507a6c1999a","fa139b59-014d-4408-8791-1e095fb2c8d6","45026d9f-779b-4037-ae4a-41d11f43518a","2fb02df1-083a-495e-8888-5edcc9348dd1","951f958f-6dae-431a-9644-16805877871b","4cc408c9-f690-40df-a09d-8db6b5018919","fa8a143f-9213-4fe9-8dd1-963345fcae55","1f32fd07-6350-4252-86fc-38a3ad78dcb5","2bf24a58-8dc4-4ee1-932c-3bfde53f71c2","7f2cc371-aa75-4272-9835-8e66a5fbff18","18fa9d78-e721-4ce7-ace3-6b1d5ac397d2","002f7f1e-2a1d-4de2-8826-d400e56160e2","9e2fe54b-aa0b-4e79-a602-bc92527bfe5b","9d415577-b597-4b2b-910b-eea1a86a18eb","a348cf61-f1e2-4848-aa0a-0b6b44961f91","df4eb1b5-f9c1-44a6-9ee1-24312bddb67e","49e57608-459d-412d-bbd9-858842022acd","960173cc-b8fb-459b-a1d5-0a23b261c66c","b6e4bca1-a1ff-4337-9f20-f9225e130304","9eb03808-455c-40fc-ab5b-47981d96bc2d","f103d3e4-01f4-487d-8050-9eab191ea259","d6dcbb40-808f-47ca-9bd6-db99a68264bb","2b594eb2-956a-4478-b123-e044d2d984ed","affe75e8-352c-4d6c-b11c-d4f888674e92","27fe586d-15bb-476f-99fb-344381b9f0d7","608e2956-575d-4df0-850f-3591faf424a6","8e1330ff-2583-4fbf-9b6d-3c3affa7b0cc","f09c7198-ea41-4a34-9ddf-591a6c340270","a901fd8d-203e-48fc-9c2c-11dd68e9af76","5a6fe942-b9e7-451b-b6ae-e939205c3bbc","bda183a5-d78f-48e2-9584-36168876a1f9","f0f2d1ed-e1d6-498c-b8c5-caaa117614a3","a652c573-1a5b-42ac-9bc8-27a9777da0de","a066a419-b93d-47b1-97aa-9aa07346fc52","fc62c8b7-0e18-4f4e-9bc0-f00afbd1ca90","c0c60d0c-6740-4176-93ad-54b9eafb9b9b","5aaaa50a-75c5-4b02-ab9f-bf113874aeb8","700ec6e1-4d7b-48e4-8eee-fb4c5681a8b1","fc13fbba-1969-4351-af57-c31b109b9bef","428c3c7a-f783-46fa-95b1-730b02b0193c","cca745be-f041-47c6-b68a-152aad966ecf","5ce3ba0a-9bec-45ef-a584-4ec59795cb4d","d7b9655a-535f-43a3-90f0-6b15a73775c0","3a357c93-085e-499d-9514-4800495f60a5","e6e56e85-7b8e-427e-9630-f9571483cd20","d530724f-4958-4351-a1de-d5909adf3985","e23b2b5b-d897-4a85-a23a-23959a8d4686","867fb5c5-5352-40bd-a6c0-d79ddab556c0","a9f2316a-7bc7-44d3-81f1-c79c56c936c9"],"propsByKey":{"8b93a07a-fc5e-4d9b-af41-4a5851ab36b2":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":97,"y":97},"frameCount":1,"looping":true,"frameDelay":12,"version":"zTvkQ1SJr1pMYK8qmTEdRl9eigZ6Bc5N","loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":97},"rootRelativePath":"assets/8b93a07a-fc5e-4d9b-af41-4a5851ab36b2.png"},"d52b81c1-317e-4bfc-bcab-0196d3b94a30":{"name":"animation_1_copy_1","sourceUrl":null,"frameSize":{"x":97,"y":97},"frameCount":1,"looping":true,"frameDelay":12,"version":"rEEcF8d4n78wvFUQSZ4aA9immq9JAVhW","loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":97},"rootRelativePath":"assets/d52b81c1-317e-4bfc-bcab-0196d3b94a30.png"},"76780546-ba83-4a70-8823-e2937f8d2dc2":{"name":"ganimation","sourceUrl":null,"frameSize":{"x":498,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"iSzouRbSgiiZVbClQuieVRcNJOSb.gg2","loadedFromSource":true,"saved":true,"sourceSize":{"x":498,"y":101},"rootRelativePath":"assets/76780546-ba83-4a70-8823-e2937f8d2dc2.png"},"63cb4649-3ccb-4dfe-95a2-62d85f1affeb":{"name":"ganimation_copy_1","sourceUrl":null,"frameSize":{"x":498,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"4hTL1xiytbMKV8ZxMF8C2fLTbi93l9Cq","loadedFromSource":true,"saved":true,"sourceSize":{"x":498,"y":101},"rootRelativePath":"assets/63cb4649-3ccb-4dfe-95a2-62d85f1affeb.png"},"64962777-e725-4f68-bc7d-129ca4fba44b":{"name":"fanimation","sourceUrl":null,"frameSize":{"x":498,"y":105},"frameCount":1,"looping":true,"frameDelay":12,"version":"jcbOZZlcD6XZ2UbMPx3yqTaFiFHIIgir","loadedFromSource":true,"saved":true,"sourceSize":{"x":498,"y":105},"rootRelativePath":"assets/64962777-e725-4f68-bc7d-129ca4fba44b.png"},"ebf1c1a5-0853-4cbb-9881-b7ed12e06079":{"name":"fanimation_copy_1","sourceUrl":null,"frameSize":{"x":498,"y":105},"frameCount":1,"looping":true,"frameDelay":12,"version":"JbDHS8ujAIXZX12Iyl60j4VJKeeJoGh7","loadedFromSource":true,"saved":true,"sourceSize":{"x":498,"y":105},"rootRelativePath":"assets/ebf1c1a5-0853-4cbb-9881-b7ed12e06079.png"},"978a850a-4fe7-48b5-a3b3-888169a61b4d":{"name":"seed_1","sourceUrl":"assets/api/v1/animation-library/5c6Aifb0..eKj0xUB7Ge6Ov014KmG1uh/category_environment/seed.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"5c6Aifb0..eKj0xUB7Ge6Ov014KmG1uh","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/5c6Aifb0..eKj0xUB7Ge6Ov014KmG1uh/category_environment/seed.png"},"bbd11ada-750b-4be9-a22b-7f71049efd2d":{"name":"purse_1","sourceUrl":null,"frameSize":{"x":89,"y":137},"frameCount":1,"looping":true,"frameDelay":12,"version":"XxekIFNJSSGV._w3dZF6ygf03KWYe_Kx","loadedFromSource":true,"saved":true,"sourceSize":{"x":89,"y":137},"rootRelativePath":"assets/bbd11ada-750b-4be9-a22b-7f71049efd2d.png"},"1a09d449-c194-4140-a352-8131a2bcec0b":{"name":"animation_2_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"_VujaT9fJsjPcvxI35nnDtCYEBUngK7H","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/1a09d449-c194-4140-a352-8131a2bcec0b.png"},"d4e7877f-b28e-4f48-b5f9-f68088bec724":{"name":"animation_2_1_copy_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"bXUx_emcRB5TzgNYjUI_mL1jBxUEI4ZG","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/d4e7877f-b28e-4f48-b5f9-f68088bec724.png"},"8eb0ed8a-d7ef-46ea-aa10-6da1c1b045fe":{"name":"swirly","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"Ymy1A1jXWMGzVGflzw.HS01J6gkAw1lX","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/8eb0ed8a-d7ef-46ea-aa10-6da1c1b045fe.png"},"64bc3de5-fa12-435c-a606-deea1570ab75":{"name":"gu dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"zxDRm8Q0lZMgfN0WT8BJk0eDqSHQJWJ5","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/64bc3de5-fa12-435c-a606-deea1570ab75.png"},"595dc56d-d340-44de-9643-09baae46e9fb":{"name":"gu get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"TFLxlcnqy3IzaDVtE5p0cP.Z_OkclRS_","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/595dc56d-d340-44de-9643-09baae46e9fb.png"},"69e2697d-2369-4e57-a5f6-6f9802609130":{"name":"gu light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"G57oYZ1ckHyWqzn4rGPpCcLPMwdld0Py","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/69e2697d-2369-4e57-a5f6-6f9802609130.png"},"a4dfd76a-c982-4e26-b7bc-e8ce4db20287":{"name":"gu1 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"I80SsZQvdwoeMMGLxR2A0PlezqJUXYYE","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/a4dfd76a-c982-4e26-b7bc-e8ce4db20287.png"},"4191bc0a-074c-485a-935c-d159f30ec547":{"name":"gu1 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"Og047rdkmBlqpvuwZ5KzsX6NNv3kYF7t","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/4191bc0a-074c-485a-935c-d159f30ec547.png"},"69542dd0-1b30-45cb-96d9-d0de3c264ea9":{"name":"gu1 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"0ou1yH6obOh7VNpb40JP5QZZ57oSbsKU","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/69542dd0-1b30-45cb-96d9-d0de3c264ea9.png"},"fbf337ff-5256-478c-b817-7ca2903c9c90":{"name":"gu2 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"LSh84EnainQaeAAivn1a6Kx1FmDf9oeq","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/fbf337ff-5256-478c-b817-7ca2903c9c90.png"},"05ca36e6-dd04-4ffb-8adc-d92e3b93376a":{"name":"gu2 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"cWwuC7NsgSRAcmoVhB2d83Rf7qfTQyih","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/05ca36e6-dd04-4ffb-8adc-d92e3b93376a.png"},"2252afd2-897c-4944-b2b6-617e5b714b50":{"name":"gu3 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"q6cMAIXG39wrSRJw2LcX0Vr7Q2q4Jd1o","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/2252afd2-897c-4944-b2b6-617e5b714b50.png"},"08553682-af32-4db6-8a66-d8304aff4373":{"name":"gu3 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"TB9CmlDYLfuu_QF_IWRgEZ3v8ndpRlKr","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/08553682-af32-4db6-8a66-d8304aff4373.png"},"dd600221-58b6-4a2e-a847-b002d06fd70d":{"name":"gu3 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"Y3ON7u3eRp7T269RSTb4pIFgDAhQpeVw","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/dd600221-58b6-4a2e-a847-b002d06fd70d.png"},"1ae636e9-548c-4a93-b464-6a56cdbe9b48":{"name":"gu2 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZIpuDBotCT3HZL2HlqS3pcyPB7TXJumy","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/1ae636e9-548c-4a93-b464-6a56cdbe9b48.png"},"3d55c1f1-aef1-4606-81ca-f04f1c3efa13":{"name":"fu1 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"gMe7ke7RX8kE7U9OVMadrZ_MveZiO1o8","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/3d55c1f1-aef1-4606-81ca-f04f1c3efa13.png"},"aaa0fedf-181b-40dc-bb59-6bfc3b5c1139":{"name":"fu1 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"YxTks1Nx8guAiNBN2F0wx0q_oI2iTET2","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/aaa0fedf-181b-40dc-bb59-6bfc3b5c1139.png"},"81c357b2-dbc4-4474-8c66-fc9d270430c9":{"name":"fu1 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"vajYWl_1NodAYSDNA2C2KVIo9GXBIkjY","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/81c357b2-dbc4-4474-8c66-fc9d270430c9.png"},"afd130cb-bf2d-4041-afb2-3de766004f4e":{"name":"mu1 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"ge0oMsK_r_MWO8EXgSclnqXmRIsMi91n","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/afd130cb-bf2d-4041-afb2-3de766004f4e.png"},"64b3102f-8281-49e9-aa25-42f5079be216":{"name":"mu2 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"nUvsGNXphI69Om3cPQ63UnQVFoy3uQ8C","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/64b3102f-8281-49e9-aa25-42f5079be216.png"},"515592b1-4119-4ae4-9ebf-cffda6f17fcc":{"name":"mu3 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"zy9addUuX5xv9mEhWVOnxvkExfQswJEb","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/515592b1-4119-4ae4-9ebf-cffda6f17fcc.png"},"afdb1794-322b-4f62-b849-e22e3b3e3a8a":{"name":"mu3 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"BsVltQgNT.Mc6i3CToFE3sKkPahhMgMF","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/afdb1794-322b-4f62-b849-e22e3b3e3a8a.png"},"3d539d40-0b4f-4f3c-bbd5-b036f4ad45de":{"name":"mu3 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"hZytdMEVm.chODvuafybuaKbbeutDnFM","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/3d539d40-0b4f-4f3c-bbd5-b036f4ad45de.png"},"ff558c8f-f6af-45af-b13d-51fb6f9f5ce4":{"name":"mu1 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"HacOTCXjE8jt_ViK62LXm2CnvrztTMzx","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/ff558c8f-f6af-45af-b13d-51fb6f9f5ce4.png"},"dd9f8a54-776a-4b95-8a93-97a8b4bcd609":{"name":"mu2 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"v7JsdTtp6kHfx7kb_.CCgm3QkiMOPbMu","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/dd9f8a54-776a-4b95-8a93-97a8b4bcd609.png"},"65cb6f49-c635-49ad-8b6b-a93711b8dd2f":{"name":"mu1 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"1HF5dyb_QfigehO20p_EZ0Fp_DrXg6c7","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/65cb6f49-c635-49ad-8b6b-a93711b8dd2f.png"},"cc37dec2-1ce3-4a70-a675-e3d5a5c47396":{"name":"mu2 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"xzK4s8kvp5q9FQHfarpqa43ztbdBjgG1","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/cc37dec2-1ce3-4a70-a675-e3d5a5c47396.png"},"fa8c82a8-cfc1-451b-8e48-ba7e527389ad":{"name":"fu2 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"y90fzeJ2oAG5IV4g5Om0WqHTo_vSnRjb","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/fa8c82a8-cfc1-451b-8e48-ba7e527389ad.png"},"11d769e6-15c4-423e-ac07-6ab26297936a":{"name":"fu3 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"viL2hErEcX_i_4roiB0ScuVcxKDXK7CD","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/11d769e6-15c4-423e-ac07-6ab26297936a.png"},"00212f2b-3eb9-4d15-93e4-7d30395eefad":{"name":"fu3 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"wuawkB5VsML5q4P7CHNAZD1TOGb1H4jL","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/00212f2b-3eb9-4d15-93e4-7d30395eefad.png"},"92d63a5a-aed7-460c-862d-a9abe875e578":{"name":"fu3 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"iu4risUPti4y7OVSgryLFOH_jHWFYQdo","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/92d63a5a-aed7-460c-862d-a9abe875e578.png"},"6ea93a4c-ef5f-4fa9-8b25-40428e03523a":{"name":"fu2 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"YyxILiK93Ptj4VxyUwb5wxnxa60yIqSu","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/6ea93a4c-ef5f-4fa9-8b25-40428e03523a.png"},"3806bbdd-1ef1-46fb-a4f7-5770614a47cb":{"name":"fu2 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"1j0KYuvIvCl5A2_SbG8_QiEM5sq2dUZ9","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/3806bbdd-1ef1-46fb-a4f7-5770614a47cb.png"},"551e5283-67d8-4e48-a778-7744597c6c46":{"name":"down","sourceUrl":null,"frameSize":{"x":168,"y":134},"frameCount":1,"looping":true,"frameDelay":12,"version":"hfzP5eYRC3v2tB9huTy8lIsw2JyjI2.A","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":134},"rootRelativePath":"assets/551e5283-67d8-4e48-a778-7744597c6c46.png"},"0ffefc05-5996-435f-871f-d7f40f26ce69":{"name":"up","sourceUrl":null,"frameSize":{"x":168,"y":134},"frameCount":1,"looping":true,"frameDelay":12,"version":"z2iFTKpq1uCnICLJHeamNfFb2WOV3jrw","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":134},"rootRelativePath":"assets/0ffefc05-5996-435f-871f-d7f40f26ce69.png"},"9579bcd9-ebfe-4ae3-94a8-4abcf67b9cd3":{"name":"facu1 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"uoDQ8ZM90_s6x0TbVQDKOl2V7mh1fXpT","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/9579bcd9-ebfe-4ae3-94a8-4abcf67b9cd3.png"},"515b24a4-9f28-491a-9128-24127b6e26dd":{"name":"facu2 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"mVVtFlfvZVnVpq2sNOfskKDMBrMQGY.E","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/515b24a4-9f28-491a-9128-24127b6e26dd.png"},"8e7c5afa-b23e-4a3c-9637-4e20c7e6831e":{"name":"facu3 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"Nv527Q2Z4nxEEPqdz1HJZT29IKFZSutc","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/8e7c5afa-b23e-4a3c-9637-4e20c7e6831e.png"},"30a712db-887d-42b7-acfd-a507a6c1999a":{"name":"facu3 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"OLY8MzMQi3U0R8XVGTOpvNSGVqrYyH.T","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/30a712db-887d-42b7-acfd-a507a6c1999a.png"},"fa139b59-014d-4408-8791-1e095fb2c8d6":{"name":"facu3 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"M.UdAjhZDW9JoEDwyJ3U6_CXYMU2rnpG","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/fa139b59-014d-4408-8791-1e095fb2c8d6.png"},"45026d9f-779b-4037-ae4a-41d11f43518a":{"name":"facu2 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"SoQKvO43ZiGR86shmoY8s7gpYDhCKQJN","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/45026d9f-779b-4037-ae4a-41d11f43518a.png"},"2fb02df1-083a-495e-8888-5edcc9348dd1":{"name":"facu2 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"h_u64xcBq8Dzso6VYyIktXQ20kV9i2NE","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/2fb02df1-083a-495e-8888-5edcc9348dd1.png"},"951f958f-6dae-431a-9644-16805877871b":{"name":"facu1 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"VvQaVloqHbu65Srp_n54GMiPZA.njX.K","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/951f958f-6dae-431a-9644-16805877871b.png"},"4cc408c9-f690-40df-a09d-8db6b5018919":{"name":"facu1 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"udZW_sqdPYfI7MyeDV1.1u4RUfU3gHQU","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/4cc408c9-f690-40df-a09d-8db6b5018919.png"},"fa8a143f-9213-4fe9-8dd1-963345fcae55":{"name":"cu1 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"G.eif.8I9sey8wKStAvx5Qt0iAtYZZlC","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/fa8a143f-9213-4fe9-8dd1-963345fcae55.png"},"1f32fd07-6350-4252-86fc-38a3ad78dcb5":{"name":"cu1 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"CWpWit5IRCBhlkM.WUP_PtaYCaZrup0r","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/1f32fd07-6350-4252-86fc-38a3ad78dcb5.png"},"2bf24a58-8dc4-4ee1-932c-3bfde53f71c2":{"name":"darksave","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"bfKgnjPBMHyQxYBrAcPmpfHrNkMdfN28","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/2bf24a58-8dc4-4ee1-932c-3bfde53f71c2.png"},"7f2cc371-aa75-4272-9835-8e66a5fbff18":{"name":"cu1 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"P2p3cQYhOLW3m1dCFvpG9RJKGwHLvCeH","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/7f2cc371-aa75-4272-9835-8e66a5fbff18.png"},"18fa9d78-e721-4ce7-ace3-6b1d5ac397d2":{"name":"cu2 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"5FxM5.6pYMcm3cb7bHgmmLHwGvVIZoiV","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/18fa9d78-e721-4ce7-ace3-6b1d5ac397d2.png"},"002f7f1e-2a1d-4de2-8826-d400e56160e2":{"name":"cu2 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"QmBy3_KHq1aIFlGvfNbgLDyNhPjSW1eq","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/002f7f1e-2a1d-4de2-8826-d400e56160e2.png"},"9e2fe54b-aa0b-4e79-a602-bc92527bfe5b":{"name":"cu2 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"3iU4DtFA2TrMDiUCPEoDU4ZyovMbElur","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/9e2fe54b-aa0b-4e79-a602-bc92527bfe5b.png"},"9d415577-b597-4b2b-910b-eea1a86a18eb":{"name":"cu3 light","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"Rt5ZXvQmJ0EGtSynyjEULbWEUbJIEiAq","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/9d415577-b597-4b2b-910b-eea1a86a18eb.png"},"a348cf61-f1e2-4848-aa0a-0b6b44961f91":{"name":"cu3 dark","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"84ap1d1EJvTOGqEKyTjXIywIxLNanbxb","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/a348cf61-f1e2-4848-aa0a-0b6b44961f91.png"},"df4eb1b5-f9c1-44a6-9ee1-24312bddb67e":{"name":"cu3 get","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"ielDZu4lD0ruEJX2qJLESSovQaJjz7aa","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/df4eb1b5-f9c1-44a6-9ee1-24312bddb67e.png"},"49e57608-459d-412d-bbd9-858842022acd":{"name":"gray","sourceUrl":null,"frameSize":{"x":168,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"ovSV5pJ7t9wN9XfUemZkuEDQF1b2fMwb","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":168},"rootRelativePath":"assets/49e57608-459d-412d-bbd9-858842022acd.png"},"960173cc-b8fb-459b-a1d5-0a23b261c66c":{"name":"brown","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"5nZnxfFOP7l.DYuLUG01_0ZIy6dhaS79","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/960173cc-b8fb-459b-a1d5-0a23b261c66c.png"},"b6e4bca1-a1ff-4337-9f20-f9225e130304":{"name":"menu","sourceUrl":null,"frameSize":{"x":100,"y":92},"frameCount":1,"looping":true,"frameDelay":12,"version":"ktKSQ5xLC_EIU_vILsHS_kITxRRwvE5_","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":92},"rootRelativePath":"assets/b6e4bca1-a1ff-4337-9f20-f9225e130304.png"},"9eb03808-455c-40fc-ab5b-47981d96bc2d":{"name":"upgrades","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"3F5kk0WuB3kT5k6AcpriKa45NQWrLVC9","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9eb03808-455c-40fc-ab5b-47981d96bc2d.png"},"f103d3e4-01f4-487d-8050-9eab191ea259":{"name":"upgradesX","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Wdg5EAhrpXvepMC5MGWmauYgl7TcLm_A","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f103d3e4-01f4-487d-8050-9eab191ea259.png"},"d6dcbb40-808f-47ca-9bd6-db99a68264bb":{"name":"facimation light","sourceUrl":null,"frameSize":{"x":502,"y":105},"frameCount":1,"looping":true,"frameDelay":12,"version":"Aiah_iEk37JXF1Tkv6YgtlgqVqHKajyu","loadedFromSource":true,"saved":true,"sourceSize":{"x":502,"y":105},"rootRelativePath":"assets/d6dcbb40-808f-47ca-9bd6-db99a68264bb.png"},"2b594eb2-956a-4478-b123-e044d2d984ed":{"name":"facimation dark","sourceUrl":null,"frameSize":{"x":502,"y":104},"frameCount":1,"looping":true,"frameDelay":12,"version":"EJd.lwuD9qa61p87k_GX30YLfYIQunY6","loadedFromSource":true,"saved":true,"sourceSize":{"x":502,"y":104},"rootRelativePath":"assets/2b594eb2-956a-4478-b123-e044d2d984ed.png"},"affe75e8-352c-4d6c-b11c-d4f888674e92":{"name":"facimation?","sourceUrl":null,"frameSize":{"x":502,"y":104},"frameCount":1,"looping":true,"frameDelay":12,"version":"1KwITHZgPBTKM14DwBMwyJzvxohzMv6R","loadedFromSource":true,"saved":true,"sourceSize":{"x":502,"y":104},"rootRelativePath":"assets/affe75e8-352c-4d6c-b11c-d4f888674e92.png"},"27fe586d-15bb-476f-99fb-344381b9f0d7":{"name":"facpic","sourceUrl":"assets/api/v1/animation-library/utor_sVvWaeC5OkkDSKkZ93_dB2pKZZv/category_generic_items/joy_stick.png","frameSize":{"x":62,"y":99},"frameCount":1,"looping":true,"frameDelay":2,"version":"utor_sVvWaeC5OkkDSKkZ93_dB2pKZZv","loadedFromSource":true,"saved":true,"sourceSize":{"x":62,"y":99},"rootRelativePath":"assets/api/v1/animation-library/utor_sVvWaeC5OkkDSKkZ93_dB2pKZZv/category_generic_items/joy_stick.png"},"608e2956-575d-4df0-850f-3591faf424a6":{"name":"cu1pic","sourceUrl":"assets/v3/animations/QxbYc3_frHdysgWgweTxDzpl-XOfva5I1pohCv0aRoc/608e2956-575d-4df0-850f-3591faf424a6.png","frameSize":{"x":247,"y":127},"frameCount":1,"looping":true,"frameDelay":4,"version":"5ypBybKlgeWBaqrP.ZkuFPHH.QtU6iyn","loadedFromSource":true,"saved":true,"sourceSize":{"x":247,"y":127},"rootRelativePath":"assets/v3/animations/QxbYc3_frHdysgWgweTxDzpl-XOfva5I1pohCv0aRoc/608e2956-575d-4df0-850f-3591faf424a6.png"},"8e1330ff-2583-4fbf-9b6d-3c3affa7b0cc":{"name":"gu1pic","sourceUrl":"assets/v3/animations/QxbYc3_frHdysgWgweTxDzpl-XOfva5I1pohCv0aRoc/8e1330ff-2583-4fbf-9b6d-3c3affa7b0cc.png","frameSize":{"x":247,"y":128},"frameCount":1,"looping":true,"frameDelay":4,"version":"30rkt3xSJh7wCwtSUDjdNDhOc3Yd8Z1j","loadedFromSource":true,"saved":true,"sourceSize":{"x":247,"y":128},"rootRelativePath":"assets/v3/animations/QxbYc3_frHdysgWgweTxDzpl-XOfva5I1pohCv0aRoc/8e1330ff-2583-4fbf-9b6d-3c3affa7b0cc.png"},"f09c7198-ea41-4a34-9ddf-591a6c340270":{"name":"gu2pic","sourceUrl":null,"frameSize":{"x":248,"y":130},"frameCount":1,"looping":true,"frameDelay":12,"version":"w_PcLg9B8diW1oOi_mwT8IH3HbyVkC_Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":130},"rootRelativePath":"assets/f09c7198-ea41-4a34-9ddf-591a6c340270.png"},"a901fd8d-203e-48fc-9c2c-11dd68e9af76":{"name":"fu1pic","sourceUrl":null,"frameSize":{"x":249,"y":129},"frameCount":1,"looping":true,"frameDelay":12,"version":"JVdyP0f56UQeQ9BLOjRFsu1BhwmaL_KA","loadedFromSource":true,"saved":true,"sourceSize":{"x":249,"y":129},"rootRelativePath":"assets/a901fd8d-203e-48fc-9c2c-11dd68e9af76.png"},"5a6fe942-b9e7-451b-b6ae-e939205c3bbc":{"name":"titlescreen","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"UPVdb2djzlq4r.2_MTHubb_.Q6DpC.Tn","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/5a6fe942-b9e7-451b-b6ae-e939205c3bbc.png"},"bda183a5-d78f-48e2-9584-36168876a1f9":{"name":"play","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"K8lITzq3nDsehJl5ZgC7bsOs14fMMkOH","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/bda183a5-d78f-48e2-9584-36168876a1f9.png"},"f0f2d1ed-e1d6-498c-b8c5-caaa117614a3":{"name":"title","sourceUrl":null,"frameSize":{"x":500,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"7w8._Iuw_9ts366jxHuieKClhf1c9F4o","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":101},"rootRelativePath":"assets/f0f2d1ed-e1d6-498c-b8c5-caaa117614a3.png"},"a652c573-1a5b-42ac-9bc8-27a9777da0de":{"name":"grandiscription","sourceUrl":null,"frameSize":{"x":249,"y":103},"frameCount":1,"looping":true,"frameDelay":12,"version":"px.3iCxvS4pC6MI0tp6p_Nh_K4m5nz5D","loadedFromSource":true,"saved":true,"sourceSize":{"x":249,"y":103},"rootRelativePath":"assets/a652c573-1a5b-42ac-9bc8-27a9777da0de.png"},"a066a419-b93d-47b1-97aa-9aa07346fc52":{"name":"farmdiscription","sourceUrl":null,"frameSize":{"x":248,"y":103},"frameCount":1,"looping":true,"frameDelay":12,"version":"oD9ojDNmxG3JLWjr5Ohk0SeaILVpPe6a","loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":103},"rootRelativePath":"assets/a066a419-b93d-47b1-97aa-9aa07346fc52.png"},"fc62c8b7-0e18-4f4e-9bc0-f00afbd1ca90":{"name":"facdiscription","sourceUrl":null,"frameSize":{"x":248,"y":104},"frameCount":1,"looping":true,"frameDelay":12,"version":"sMrczS8ZAH7f9uTI9sE3x9zgfmMUPSsK","loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":104},"rootRelativePath":"assets/fc62c8b7-0e18-4f4e-9bc0-f00afbd1ca90.png"},"c0c60d0c-6740-4176-93ad-54b9eafb9b9b":{"name":"cu2pic","sourceUrl":"assets/v3/animations/QxbYc3_frHdysgWgweTxDzpl-XOfva5I1pohCv0aRoc/c0c60d0c-6740-4176-93ad-54b9eafb9b9b.png","frameSize":{"x":248,"y":103},"frameCount":1,"looping":true,"frameDelay":4,"version":"_451huJXN_3QIWNlixRKmKMCpv3i3J6F","loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":103},"rootRelativePath":"assets/v3/animations/QxbYc3_frHdysgWgweTxDzpl-XOfva5I1pohCv0aRoc/c0c60d0c-6740-4176-93ad-54b9eafb9b9b.png"},"5aaaa50a-75c5-4b02-ab9f-bf113874aeb8":{"name":"facu1pic","sourceUrl":"assets/v3/animations/QxbYc3_frHdysgWgweTxDzpl-XOfva5I1pohCv0aRoc/5aaaa50a-75c5-4b02-ab9f-bf113874aeb8.png","frameSize":{"x":248,"y":103},"frameCount":1,"looping":true,"frameDelay":4,"version":"xRAW_2Ywt4JtIoPWmA2fAX7BvxYlLyCq","loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":103},"rootRelativePath":"assets/v3/animations/QxbYc3_frHdysgWgweTxDzpl-XOfva5I1pohCv0aRoc/5aaaa50a-75c5-4b02-ab9f-bf113874aeb8.png"},"700ec6e1-4d7b-48e4-8eee-fb4c5681a8b1":{"name":"facu2pic","sourceUrl":"assets/v3/animations/QxbYc3_frHdysgWgweTxDzpl-XOfva5I1pohCv0aRoc/700ec6e1-4d7b-48e4-8eee-fb4c5681a8b1.png","frameSize":{"x":248,"y":124},"frameCount":1,"looping":true,"frameDelay":4,"version":"DbZwDmxXaEIqKjQU7m4MdxBq60w3NWVi","loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":124},"rootRelativePath":"assets/v3/animations/QxbYc3_frHdysgWgweTxDzpl-XOfva5I1pohCv0aRoc/700ec6e1-4d7b-48e4-8eee-fb4c5681a8b1.png"},"fc13fbba-1969-4351-af57-c31b109b9bef":{"name":"fu2pic","sourceUrl":"assets/v3/animations/QxbYc3_frHdysgWgweTxDzpl-XOfva5I1pohCv0aRoc/fc13fbba-1969-4351-af57-c31b109b9bef.png","frameSize":{"x":249,"y":106},"frameCount":1,"looping":true,"frameDelay":4,"version":"7ghPK3zHOTVqixoh_Y_S5q.oNw8x76Rv","loadedFromSource":true,"saved":true,"sourceSize":{"x":249,"y":106},"rootRelativePath":"assets/v3/animations/QxbYc3_frHdysgWgweTxDzpl-XOfva5I1pohCv0aRoc/fc13fbba-1969-4351-af57-c31b109b9bef.png"},"428c3c7a-f783-46fa-95b1-730b02b0193c":{"name":"settings","sourceUrl":null,"frameSize":{"x":397,"y":405},"frameCount":1,"looping":true,"frameDelay":12,"version":"KU7Z6AsVEM52sI5jVrWrrADMfEuRmnPN","loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":405},"rootRelativePath":"assets/428c3c7a-f783-46fa-95b1-730b02b0193c.png"},"cca745be-f041-47c6-b68a-152aad966ecf":{"name":"settingspage","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"BkGgY1fBqNyU1LV0tupqsZjprHFJTRUa","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/cca745be-f041-47c6-b68a-152aad966ecf.png"},"5ce3ba0a-9bec-45ef-a584-4ec59795cb4d":{"name":"on","sourceUrl":null,"frameSize":{"x":110,"y":57},"frameCount":1,"looping":true,"frameDelay":12,"version":"kEWNYA9ZUZiZ07i64qbo5_ptZI51pkrs","loadedFromSource":true,"saved":true,"sourceSize":{"x":110,"y":57},"rootRelativePath":"assets/5ce3ba0a-9bec-45ef-a584-4ec59795cb4d.png"},"d7b9655a-535f-43a3-90f0-6b15a73775c0":{"name":"off","sourceUrl":null,"frameSize":{"x":110,"y":57},"frameCount":1,"looping":true,"frameDelay":12,"version":"ntm6XjoeRNt5wcdVZSvJ17SITVGIhDP5","loadedFromSource":true,"saved":true,"sourceSize":{"x":110,"y":57},"rootRelativePath":"assets/d7b9655a-535f-43a3-90f0-6b15a73775c0.png"},"3a357c93-085e-499d-9514-4800495f60a5":{"name":"minepic","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"gczhhY0lhSW5ylMW18LBQ3b0M87OF7d5","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/3a357c93-085e-499d-9514-4800495f60a5.png"},"e6e56e85-7b8e-427e-9630-f9571483cd20":{"name":"mineimation light","sourceUrl":null,"frameSize":{"x":501,"y":104},"frameCount":1,"looping":true,"frameDelay":12,"version":"CIJXN2IAKJwFLUHZ35GmOSj9BrM9Pgsr","loadedFromSource":true,"saved":true,"sourceSize":{"x":501,"y":104},"rootRelativePath":"assets/e6e56e85-7b8e-427e-9630-f9571483cd20.png"},"d530724f-4958-4351-a1de-d5909adf3985":{"name":"mineimation dark","sourceUrl":null,"frameSize":{"x":501,"y":104},"frameCount":1,"looping":true,"frameDelay":12,"version":"kucIO4d0MRvzeXECWbILd.kDArINLCu_","loadedFromSource":true,"saved":true,"sourceSize":{"x":501,"y":104},"rootRelativePath":"assets/d530724f-4958-4351-a1de-d5909adf3985.png"},"e23b2b5b-d897-4a85-a23a-23959a8d4686":{"name":"stats","sourceUrl":null,"frameSize":{"x":512,"y":439},"frameCount":1,"looping":true,"frameDelay":12,"version":"5S4RFs.n4rOW7pOi89VxAEyhcv.w7nwN","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":439},"rootRelativePath":"assets/e23b2b5b-d897-4a85-a23a-23959a8d4686.png"},"867fb5c5-5352-40bd-a6c0-d79ddab556c0":{"name":"switch","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":12,"version":"bFN9s_credqbYPDoINjtc4iqvB.1otdy","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/867fb5c5-5352-40bd-a6c0-d79ddab556c0.png"},"a9f2316a-7bc7-44d3-81f1-c79c56c936c9":{"name":"cu3pic","sourceUrl":null,"frameSize":{"x":248,"y":106},"frameCount":1,"looping":true,"frameDelay":12,"version":"qmNc5wkoizABBXA_rxrlUbqU7Y1Flk2S","loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":106},"rootRelativePath":"assets/a9f2316a-7bc7-44d3-81f1-c79c56c936c9.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

World.frameRate = 30;
//Cookie Background
var bakround = createSprite(92, 135);
bakround.setAnimation("swirly");
bakround.scale = 3.3;
// 
var clicting = createSprite(100, 120);
clicting.setAnimation("animation_1_copy_1");
clicting.scale = 1.6;
clicting.setCollider("circle");
clicting.visible = 0;
// 
var cookie = createSprite(100, 120);
cookie.setAnimation("animation_1");
cookie.scale = 1.4;
cookie.setCollider("circle");
// 
var grandma = createSprite(300, 100);
grandma.setAnimation("ganimation");
grandma.scale = 0.3;
// 
var farm = createSprite(300, 140);
farm.setAnimation("facimation?");
farm.scale = 0.3;
// 
var mine = createSprite(300, 180);
mine.setAnimation("facimation?");
mine.scale = 0.3;
// 
var factory = createSprite(300, 220);
factory.setAnimation("facimation?");
factory.scale = 0.3;
// 
var granpic = createSprite(250, 100);
granpic.setAnimation("purse_1");
granpic.scale = 0.2;
// 
var farmpic = createSprite(250, 140);
farmpic.setAnimation("seed_1");
farmpic.scale = 0.4;
farmpic.visible = 0;
// 
var minepic = createSprite(250, 180);
minepic.setAnimation("minepic");
minepic.scale = 0.3;
// 
var facpic = createSprite(250, 220);
facpic.setAnimation("facpic");
facpic.scale = 0.3;
facpic.visible = 0;
// 
var brown = createSprite(200, 200);
brown.setAnimation("brown");
brown.scale = 5;
brown.visible = 0;
// 
var upgradesX = createSprite(350, 350);
upgradesX.setAnimation("upgradesX");
upgradesX.scale = 0.5;
upgradesX.visible = 0;
// 
var cu1 = createSprite(50, 50);
cu1.setAnimation("gray");
cu1.scale = 0.32;
cu1.visible = 0;
// 
var cu2 = createSprite(125, 50);
cu2.setAnimation("gray");
cu2.scale = 0.32;
cu2.visible = 0;
// 
var cu3 = createSprite(200, 50);
cu3.setAnimation("gray");
cu3.scale = 0.32;
cu3.visible = 0;
// 
var gu1 = createSprite(50, 125);
gu1.setAnimation("gray");
gu1.scale = 0.32;
gu1.visible = 0;
// 
var gu2 = createSprite(125, 125);
gu2.setAnimation("gray");
gu2.scale = 0.32;
gu2.visible = 0;
// 
var gu3 = createSprite(200, 125);
gu3.setAnimation("gray");
gu3.scale = 0.32;
gu3.visible = 0;
// 
var fu1 = createSprite(50, 200);
fu1.setAnimation("gray");
fu1.scale = 0.32;
fu1.visible = 0;
// 
var fu2 = createSprite(125, 200);
fu2.setAnimation("gray");
fu2.scale = 0.32;
fu2.visible = 0;
// 
var fu3 = createSprite(200, 200);
fu3.setAnimation("gray");
fu3.scale = 0.32;
fu3.visible = 0;
// 
var mu1 = createSprite(50, 275);
mu1.setAnimation("gray");
mu1.scale = 0.32;
mu1.visible = 0;
// 
var mu2 = createSprite(125, 275);
mu2.setAnimation("gray");
mu2.scale = 0.32;
mu2.visible = 0;
// 
var mu3 = createSprite(200, 275);
mu3.setAnimation("gray");
mu3.scale = 0.32;
mu3.visible = 0;
// 
var facu1 = createSprite(50, 350);
facu1.setAnimation("gray");
facu1.scale = 0.32;
facu1.visible = 0;
// 
var facu2 = createSprite(125, 350);
facu2.setAnimation("gray");
facu2.scale = 0.32;
facu2.visible = 0;
// 
var facu3 = createSprite(200, 350);
facu3.setAnimation("gray");
facu3.scale = 0.32;
facu3.visible = 0;
// 
var l = createSprite(300, 300);
l.setAnimation("gu1pic");
l.scale = 0.6;
l.visible = 0;
// 
var gu2pic = createSprite(300, 300);
gu2pic.setAnimation("gu2pic");
gu2pic.scale = 0.6;
gu2pic.visible = 0;
// 
var fu1pic = createSprite(300, 300);
fu1pic.setAnimation("fu1pic");
fu1pic.scale = 0.6;
fu1pic.visible = 0;
// 
var cu1pic = createSprite(300, 300);
cu1pic.setAnimation("cu1pic");
cu1pic.scale = 0.6;
cu1pic.visible = 0;
// 
var cu2pic = createSprite(300, 300);
cu2pic.setAnimation("cu2pic");
cu2pic.scale = 0.6;
cu2pic.visible = 0;
// 
var cu3pic = createSprite(300, 300);
cu3pic.setAnimation("cu3pic");
cu3pic.scale = 0.6;
cu3pic.visible = 0;
// 
var facu1discription = createSprite(300, 300);
facu1discription.setAnimation("facu1pic");
facu1discription.scale = 0.6;
facu1discription.visible = 0;
// 
var facu2discription = createSprite(300, 300);
facu2discription.setAnimation("facu2pic");
facu2discription.scale = 0.6;
facu2discription.visible = 0;
// 
var fu2pic = createSprite(300, 300);
fu2pic.setAnimation("fu2pic");
fu2pic.scale = 0.6;
fu2pic.visible = 0;
// 
var upgrades = createSprite(100, 300);
upgrades.setAnimation("upgrades");
upgrades.scale = 0.5;
// 
var titlescreen = createSprite(200, 200);
titlescreen.setAnimation("titlescreen");
titlescreen.scale = 5;
// 
var sswitch = createSprite(300, 300);
sswitch.setAnimation("switch");
sswitch.scale = 0.1;
// 
var play = createSprite(200, 200);
play.setAnimation("play");
play.scale = 0.5;
// 
var settings = createSprite(50, 250);
settings.setAnimation("settings");
settings.scale = 0.1;
// 
var title = createSprite(210, 50);
title.setAnimation("title");
// 
var menu = createSprite(35, 300);
menu.setAnimation("menu");
menu.scale = 0.5;
menu.visible = 0;
// 
var scookie1 = createSprite(300, 140);
scookie1.setAnimation("animation_1");
// 
var scookie2 = createSprite(100, 140);
scookie2.setAnimation("animation_1");
// 
var settingspage = createSprite(200, 200);
settingspage.setAnimation("settingspage");
settingspage.scale = 5;
settingspage.visible = 0;
settingspage.setCollider("circle");
// 
var p1 = createSprite(60, 50);
p1.setAnimation("on");
p1.visible = 0;
p1.scale = 0.6;
// 
var p2 = createSprite(60, 100);
p2.setAnimation("off");
p2.visible = 0;
p2.scale = 0.6;
// 
var settingsx = createSprite(350, 350);
settingsx.setAnimation("upgradesX");
settingsx.scale = 0.5;
settingsx.visible = 0;
// 
var grandiscription = createSprite(300, 300);
grandiscription.setAnimation("grandiscription");
grandiscription.scale = 0.8;
grandiscription.visible = 0;
// 
var farmdiscription = createSprite(300, 300);
farmdiscription.setAnimation("farmdiscription");
farmdiscription.scale = 0.8;
farmdiscription.visible = 0;
// 
var facdiscription = createSprite(300, 300);
facdiscription.setAnimation("facdiscription");
facdiscription.scale = 0.8;
facdiscription.visible = 0;
// 
var cookies = 0;
var grandmacounter = 0;
var mousex = 1;
var grandmacost = 20;
var farmcounter = 0;
var farmcost = 40;
var minecounter = 0;
var minecost = 80;
var factorycounter = 0;
var factorycost = 160;
var granx = 1;
var farmx=1;
var minex = 1;
var facx = 1;
var x = 0;
var XP = 0;
var splash = 0;
var splash2 = randomNumber(1, 20);
var splashsise = 19.5;
var splashsisecounter = 0;
var p1s = 1;
var p2s = -1;
var cps = 0;
function draw() {
  //Setting Cookie Background
  if (p2s == 1) {
    bakround.setAnimation("swirly");
  } else {
    bakround.setAnimation("animation_2_1");
  }
  //Determining XP
  XP = cookies/100+(grandmacounter*granx)/5+(farmcounter*farmx/3+(mousex-1)+((factorycounter*facx)/1 + (minecounter*minex)/2));
  scookie1.rotation = scookie1.rotation - 5;
  scookie2.rotation = scookie2.rotation +5;
  splash = splash + 1;
  splashsisecounter = splashsisecounter + 1;
  //Second counter
  x = x+1;
  //Determining CPS
  cps = grandmacounter*granx + (((farmcounter*farmx)*2 + (minecounter * minex)*4) + (factorycounter * facx)*8);
  //Cookie Gains
  if (x == 30) {
    cookies = cookies+cps;
    x = 0;
  }
  //Increasing unit cost
  grandmacost = 20 + (grandmacounter)*2;
  farmcost = 40 + (farmcounter)*2;
  minecost = 80 + (minecounter) * 2;
  factorycost = 160 + (factorycounter)*2;
  //Pressing Play
  if (settingspage.visible == 0) {
    if (mouseIsOver(play) && mouseWentDown("leftButton")) {
      titlescreen.visible = 0;
      play.visible = 0;
      title.visible = 0;
      scookie2.visible = 0;
      scookie1.visible = 0;
      settings.visible = 0;
      sswitch.visible = 0;
    }
    if (mouseIsOver(play)) {
      play.scale = 0.6;
    } else {
      play.scale = 0.5;
    }
  }
  //Pressing Settings
  if (titlescreen.visible == 1) {
    if (mouseIsOver(settings) && mouseWentDown("leftButton")) {
      settingspage.visible = 1;
      settingsx.visible = 1;
      p1.visible = 1;
      p2.visible = 1;
    }
    if (mouseIsOver(settings)) {
      settings.scale = 0.13;
    } else {
      settings.scale = 0.1;
    }
  }
  if (settingspage.visible == 1) {
    if (mouseIsOver(p1) && mouseWentDown("leftButton")) {
      p1s = -p1s;
    }
    if (mouseIsOver(p2) && mouseWentDown("leftButton")) {
      p2s = -p2s;
    }
  }
  if (p1s == 1) {
    p1.setAnimation("on");
  } else {
    p1.setAnimation("off");
  }
  if (p2s == 1) {
    p2.setAnimation("on");
  } else {
    p2.setAnimation("off");
  }
  if (mouseIsOver(settingsx) && mouseDown("leftButton")) {
    settingspage.visible = 0;
    settingsx.visible = 0;
    p1.visible = 0;
    p2.visible = 0;
  }
  if (mouseIsOver(settingsx)) {
    settingsx.scale = 0.6;
  } else {
    settingsx.scale = 0.5;
  }
  if (titlescreen.visible == 0) {
    menu.visible = 1;
    if (brown.visible==0) {
      if (mouseIsOver(menu) && mouseWentDown("leftButton")) {
        titlescreen.visible = 1;
        title.visible = 1;
        play.visible = 1;
        menu.visible = 0;
        scookie1.visible = 1;
        scookie2.visible = 1;
        settings.visible = 1;
        sswitch.visible = 1;
      }
    }
    if (mouseIsOver(menu)) {
      menu.scale = 0.6;
    } else {
      menu.scale = 0.5;
    }
    //clicking
    if (mouseIsOver(cookie) && mouseWentDown("leftButton")) {
      cookies = cookies+mousex;
    }
    //Grandma buying
    if (cookies>=grandmacost) {
      grandma.setAnimation("ganimation_copy_1");
      if (mouseIsOver(grandma) && mouseWentDown("leftButton")) {
        cookies = cookies-grandmacost;
        grandmacounter = grandmacounter+1;
      }
    } else {
      grandma.setAnimation("ganimation");
    }
    //Grandma Discription
    if (p1s==1) {
      if (mouseIsOver(grandma)) {
        if (grandma.visible == 1) {
          if (brown.visible == 0) {
            grandiscription.visible = 1;
          }
        }
      } else {
        grandiscription.visible = 0;
      }
    }
    //Grandma upgrade 1
    if (XP>=6 || granx >= 2) {
      if (granx == 1) {
        gu1.setAnimation("gu1 dark");
        if (cookies >= 1500) {
          gu1.setAnimation("gu1 light");
          if (gu1.visible == 1) {
            if (mouseIsOver(gu1) && mouseDown("leftButton")) {
              gu1.setAnimation("gu1 get");
              cookies = cookies-1500;
              gu1.visible = 0;
              granx = 2;
            }
          }
        } else {
          gu1.setAnimation("gu1 dark");
        }
      }
    } else {
      gu1.setAnimation("gray");
    }
    //Grandma upgrade 1 Description
    if (gu1.visible == 1) {
      if (mouseIsOver(gu1)) {
        if (XP >= 6) {
          l.visible = 1;
        }
      } else {
        l.visible = 0;
      }
    }
    //Grandma upgrade 2
    if (XP >= 12 || granx==4) {
      if (granx == 2) {
        gu2.setAnimation("gu2 dark");
        if (cookies >= 3000) {
          gu2.setAnimation("gu2 light");
          if (gu2.visible == 1) {
            if (mouseIsOver(gu2) && mouseWentDown("leftButton")) {
              gu2.setAnimation("gu2 get");
              cookies = cookies - 3000;
              granx = 4;
            }
          }
        }
      }
    } else {
      gu2.setAnimation("gray");
    }
    //Grandma upgrade 2 Description
    if (gu2.visible == 1) {
      if (mouseIsOver(gu2)) {
        if (XP >= 12 || granx >= 4) {
          gu2pic.visible = 1;
        }
      } else {
        gu2pic.visible = 0;
      }
    }
    if (XP >= 24 || granx>=8) {
      if (granx == 4) {
        gu3.setAnimation("gu3 dark");
        if (cookies >= 6000) {
          gu3.setAnimation("gu3 light");
          if (gu3.visible == 1) {
            if (mouseIsOver(gu3) && mouseWentDown("leftButton")) {
              gu3.setAnimation("gu3 get");
              cookies = cookies - 6000;
              granx = 8;
            }
          }
        }
      }
    } else {
      gu3.setAnimation("gray");
    }
    //Farm buying
    if (XP >= 2 || farmcounter >= 1) {
      farm.setAnimation("fanimation_copy_1");
      farmpic.visible = 1;
      if (cookies >= farmcost) {
        farm.setAnimation("fanimation");
        if (mouseIsOver(farm) && mouseWentDown("leftButton")) {
          farmcounter = farmcounter + 1;
          cookies = cookies-farmcost;
        }
      } else {
        farm.setAnimation("fanimation_copy_1");
      }
    } else {
      farm.setAnimation("facimation?");
      farmpic.visible = 0;
    }
    //Farm Discription
    if (p1s == 1) {
      if (mouseIsOver(farm)) {
        if (XP >= 2 || farmcounter >= 1) {
          if (farm.visible == 1) {
            if (brown.visible == 0) {
              farmdiscription.visible = 1;
            }
          }
        }
      } else {
        farmdiscription.visible = 0;
      }
    }
    //Farm upgrade 1
    if (farmx == 1) {
      if (XP >= 10) {
        fu1.setAnimation("fu1 dark");
        if (cookies >= 3000) {
          fu1.setAnimation("fu1 light");
          if (fu1.visible == 1) {
            if (mouseIsOver(fu1) && mouseWentDown("leftButton")) {
              fu1.setAnimation("fu1 get");
              cookies = cookies-3000;
              fu1.visible = 0;
              farmx = 2;
            }
          }
        }
      } else {
        fu1.setAnimation("gray");
      }
    }
    //Farm upgrade 1 Description
    if (fu1.visible == 1) {
      if (mouseIsOver(fu1)) {
        if (XP >= 10) {
          fu1pic.visible = 1;
        }
      } else {
        fu1pic.visible = 0;
      }
    }
    //Farm upgrade 2
    if (XP >= 20 || farmx >= 4) {
      if (farmx == 2) {
        fu2.setAnimation("fu2 dark");
        if (cookies >= 6000) {
          fu2.setAnimation("fu2 light");
          if (fu2.visible == 1) {
            if (mouseIsOver(fu2) && mouseWentDown("leftButton")) {
              fu2.setAnimation("fu2 get");
              cookies = cookies - 6000;
              farmx = 4;
            }
          }
        }
      }
    } else {
      fu2.setAnimation("gray");
    }
    //Farm Upgrade 2 Discription
    if (fu2.visible == 1) {
      if (mouseIsOver(fu2)) {
        if (farmx == 2 || XP >= 20) {
          fu2pic.visible = 1;
        }
      } else {
        fu2pic.visible = 0;
      }
    }
    //Farm Upgrade 3
    if (XP >= 40 || farmx >= 8) {
      if (farmx == 4) {
        fu3.setAnimation("fu3 dark");
        if (cookies >= 12000) {
          fu3.setAnimation("fu3 light");
          if (fu3.visible == 1) {
            if (mouseIsOver(fu3) && mouseWentDown("leftButton")) {
              fu3.setAnimation("fu3 get");
              cookies = cookies - 12000;
              farmx = 8;
            }
          }
        }
      }
    } else {
      fu3.setAnimation("gray");
    }
    //Mine Buying
    if (XP >= 4 || minecounter >= 1) {
      mine.setAnimation("mineimation dark");
      minepic.visible = 1;
      if (cookies >= minecost) {
        mine.setAnimation("mineimation light");
        if (mouseIsOver(mine) && mouseWentDown("leftButton")) {
          minecounter = minecounter + 1;
          cookies = cookies - minecost;
        }
      }
    } else {
      mine.setAnimation("facimation?");
      minepic.visible = 0;
    }
    //Mine Upgrade 1
    if (XP >= 20 && minex == 1) {
      mu1.setAnimation("mu1 dark");
      if (cookies >= 6000) {
        mu1.setAnimation("mu1 light");
        if (mu1.visible == 1) {
          if (mouseIsOver(mu1) && mouseWentDown("leftButton")) {
            mu1.setAnimation("mu1 get");
            cookies = cookies - 6000;
            minex = 2;
          }
        }
      }
    }
    //Mine Upgrade 2
    if (XP >= 40 || minex >= 4) {
      if (minex == 2) {
        mu2.setAnimation("mu2 dark");
        if (cookies >= 12000) {
          mu2.setAnimation("mu2 light");
          if (mu2.visible == 1) {
            if (mouseIsOver(mu2) && mouseWentDown("leftButton")) {
              mu2.setAnimation("mu2 get");
              cookies = cookies - 12000;
              minex = 4;
            }
          }
        }
      }
    } else {
      mu2.setAnimation("gray");
    }
    //Mine Upgrade 3
    if (XP >= 80 || minex >= 8) {
      if (minex == 4) {
        mu3.setAnimation("mu3 dark");
        if (cookies >= 24000) {
          mu3.setAnimation("mu3 light");
          if (mu3.visible == 1) {
            if (mouseIsOver(mu3) && mouseWentDown("leftButton")) {
              mu3.setAnimation("mu3 get");
              cookies = cookies - 24000;
              minex = 8;
            }
          }
        }
      }
    } else {
      mu3.setAnimation("gray");
    }
    //Factory buying
    if (XP >= 8 || factorycounter >= 1) {
      factory.setAnimation("facimation dark");
      facpic.visible = 1;
      if (cookies >= factorycost) {
        factory.setAnimation("facimation light");
        if (mouseIsOver(factory) && mouseWentDown("leftButton")) {
          factorycounter = factorycounter + 1;
          cookies = cookies - factorycost;
        }
      }
    } else {
      factory.setAnimation("facimation?");
      facpic.visible = 0;
    }
    //Factory  Discription
    if (p1s == 1) {
      if (mouseIsOver(factory)) {
        if (XP >= 8 || factorycounter >= 1) {
          if (factory.visible == 1) {
            if (brown.visible == 0) {
              facdiscription.visible = 1;
            }
          }
        }
      } else {
        facdiscription.visible = 0;
      }
    }
    //Factory upgrade 1
    if (XP >= 40 || facx==2) {
      if (facx == 1) {
        facu1.setAnimation("facu1 dark");
        if (facu1.visible == 1 && cookies >= 12000) {
          facu1.setAnimation("facu1 light");
          if (mouseIsOver(facu1) && mouseWentDown("leftButton")) {
            facu1.setAnimation("facu1 get");
            cookies = cookies - 12000;
            facx = 2;
          }
        }
      }
    } else {
      facu1.setAnimation("gray");
    }
    if (facu1.visible == 1) {
      if (mouseIsOver(facu1)) {
        if (XP >= 40 || facx == 2) {
          facu1discription.visible = 1;
        }
      } else {
        facu1discription.visible = 0;
      }
    }
    //Factory upgrade 2
    if (XP >= 80 || facx >= 4) {
      if (facx == 2) {
        facu2.setAnimation("facu2 dark");
        if (facu2.visible == 1 && cookies >= 24000) {
          facu2.setAnimation("facu2 light");
          if (mouseIsOver(facu2) && mouseWentDown("leftButton")) {
            facu2.setAnimation("facu2 get");
            cookies = cookies - 24000;
            facx = 4;
          }
        }
      }
    } else {
      facu2.setAnimation("gray");
    }
    //Factory Upgrade 2 Discription
    if (facu2.visible == 1) {
      if (mouseIsOver(facu2)) {
        if (XP >= 80 || facx == 4) {
          facu2discription.visible = 1;
        }
      } else {
        facu2discription.visible = 0;
      }
    }
    if (XP >= 160 || facx >= 8) {
      if (facx == 4) {
        facu3.setAnimation("facu3 dark");
        if (facu3.visible == 1 && cookies >= 48000) {
          facu3.setAnimation("facu3 light");
          if (mouseIsOver(facu3) && mouseWentDown("leftButton")) {
            facu3.setAnimation("facu3 get");
            cookies = cookies - 48000;
            facx = 8;
          }
        }
      }
    } else {
      facu3.setAnimation("gray");
    }
    if (XP >= 3 || mousex >= 2) {
      if (mousex==1) {
        cu1.setAnimation("cu1 dark");
        if (cu1.visible == 1 && cookies >= 200) {
          cu1.setAnimation("cu1 light");
          if (mouseWentDown("leftButton") && mouseIsOver(cu1)) {
            cu1.setAnimation("cu1 get");
            cookies = cookies-200;
            mousex = 2;
          }
        }
      }
    } else {
      cu1.setAnimation("gray");
    }
    if (cu1.visible == 1) {
      if (mouseIsOver(cu1)) {
        if (XP >= 3) {
          cu1pic.visible = 1;
        }
      } else {
        cu1pic.visible = 0;
      }
    }
    if (XP >= 6 || mousex >= 4) {
      if (mousex == 2) {
        cu2.setAnimation("cu2 dark");
        if (cu2.visible == 1 && cookies >= 600) {
          cu2.setAnimation("cu2 light");
          if (mouseIsOver(cu2) && mouseWentDown("leftButton")) {
            cu2.setAnimation("cu2 get");
            cookies = cookies - 600;
            mousex = 4;
          }
        }
      }
    } else {
      cu2.setAnimation("gray");
    }
    if (cu2.visible == 1) {
      if (mouseIsOver(cu2)) {
        if (XP >= 6) {
          if (mousex >= 2) {
            cu2pic.visible = 1;
          }
        }
      } else {
        cu2pic.visible = 0;
      }
    }
    if (XP >= 12 || mousex >= 8) {
      if (mousex == 4) {
        cu3.setAnimation("cu3 dark");
        if (cu3.visible == 1 && cookies >= 1200) {
          cu3.setAnimation("cu3 light");
          if (mouseIsOver(cu3) && mouseWentDown("leftButton")) {
            cu3.setAnimation("cu3 get");
            cookies = cookies - 1200;
            mousex = 8;
          }
        }
      }
    } else {
      cu3.setAnimation("gray");
    }
    if (cu3.visible == 1) {
      if (mouseIsOver(cu3)) {
        if (XP >= 12) {
          if (mousex >= 4) {
            cu3pic.visible = 1;
          }
        }
      } else {
        cu3pic.visible = 0;
      }
    }
    if (mouseIsOver(upgrades) && mouseWentUp("leftButton")) {
      brown.visible = 1;
    }
    if (mouseIsOver(upgrades)) {
      upgrades.scale = 0.6;
    } else {
      upgrades.scale = 0.5;
    }
    if (brown.visible == 1) {
      upgrades.visible = 0;
      upgradesX.visible = 1;
      gu1.visible = 1;
      cu1.visible = 1;
      fu1.visible = 1;
      cu2.visible = 1;
      gu2.visible = 1;
      facu1.visible = 1;
      fu2.visible = 1;
      facu2.visible = 1;
      menu.visible = 0;
      mu1.visible = 1;
      mu2.visible = 1;
      cu3.visible = 1;
      gu3.visible = 1;
      fu3.visible = 1;
      mu3.visible = 1;
      facu3.visible = 1;
    } else {
      upgrades.visible = 1;
      upgradesX.visible = 0;
      gu1.visible = 0;
      cu1.visible = 0;
      fu1.visible = 0;
      cu2.visible = 0;
      gu2.visible = 0;
      facu1.visible = 0;
      fu2.visible = 0;
      facu2.visible = 0;
      mu1.visible = 0;
      mu2.visible = 0;
      cu3.visible = 0;
      gu3.visible = 0;
      fu3.visible = 0;
      mu3.visible = 0;
      facu3.visible = 0;
    }
    if (upgradesX.visible == 1) {
      if (mouseIsOver(upgradesX) && mouseWentDown("leftButton")) {
        brown.visible = 0;
      }
    }
    if (mouseIsOver(upgradesX)) {
      upgradesX.scale = 0.6;
    } else {
      upgradesX.scale = 0.5;
    }
    if (mousePressedOver(cookie) || mousePressedOver(clicting)) {
      cookie.scale = 1.4;
    } else {
      if (mouseIsOver(cookie)) {
        cookie.scale = 1.6;
      } else {
        cookie.scale = 1.4;
      }
    }
  }
  background("SaddleBrown");
  fill("black");
  textSize(12);
  drawSprites();
  if (brown.visible == 0) {
    if (titlescreen.visible == 0) {
      text(grandmacost, 340, 105);
      if (XP >= 2 || farmcounter >= 1) {
        text(farmcost, 340, 145);
      }
      if (XP >= 4 || minecounter >= 1) {
        text(minecost, 340, 185);
      }
      if (XP >= 8 || factorycounter >= 1) {
        text(factorycost, 340, 225);
      }
      fill("White");
      textSize(35);
      if (cookies < 9999999999) {
        textAlign(CENTER, CENTER);
        text(cookies, cookie.x, 25);
      } else {
        textAlign(LEFT, CENTER);
        text(cookies, cookie.x-90, 25);
      }
    }
    fill("White");
    textSize(20);
    textAlign(LEFT, CENTER);
    if (settingspage.visible == 1) {
      text("Show discription for units", 110, p1.y);
      text("Swirling cookie background", 110, p2.y);
    }
  }
  if (splashsisecounter == 15) {
    if (splashsise == 19.5) {
      splashsise = 20.5;
      splashsisecounter = 0;
    } else {
      splashsise = 19.5;
      splashsisecounter = 0;
    }
  }
  if (splash == 200) {
    splash2 = randomNumber(1, 100);
    splash = 0;
  }
  textSize(splashsise);
  textAlign(CENTER, TOP);
  fill("white");
  if (titlescreen.visible == 1) {
    if (settingspage.visible == 0) {
      if (mouseIsOver(sswitch) && mouseWentDown("leftButton")) {
        if (sswitch.visible == 1) {
          splash2 = randomNumber(1, 100);
          splash = 0;
        }
      }
      if (mouseIsOver(sswitch)) {
        sswitch.scale = 0.13;
      } else {
        sswitch.scale = 0.1;
      }
      //Splashtext
      if (splash2 == 1) {
        text("Cookies Cookies Cookies!", 200, 350);
      } else if ((splash2 == 2)) {
        text("chomp chomp chomp!", 200, 350);
      } else if ((splash2 == 3)) {
        text("Enjoying this game?", 200, 350);
      } else if ((splash2 == 4)) {
        text("What's your favorite cookie?", 200, 350);
      } else if ((splash2 == 5)) {
        text("Have any factories cookie yet?", 200, 350);
      } else if ((splash2 == 6)) {
        text("Let's get baking!", 200, 350);
      } else if ((splash2 == 7)) {
        text("Is it the weekend yet?", 200, 350);
      } else if ((splash2 == 8)) {
        text("Splash text is fun!", 200, 350);
      } else if ((splash2 == 9)) {
        text("1K+ lines of code!", 200, 350);
      } else if ((splash2 == 10)) {
        text("check out the background in the settings!", 200, 350);
      } else if ((splash2 == 11)) {
        text("Wolves fart, you know.", 200, 350);
      } else if ((splash2 == 12)) {
        text("Creepers explode, right?", 200, 350);
      } else if ((splash2 == 13)) {
        text("click play to begin!", 200, 350);
      } else if ((splash2 == 14)) {
        text("ERROR 27990A", 200, 350);
      } else if ((splash2 == 15)) {
        text("Are you suprised this game even works?", 200, 350);
      } else if ((splash2 == 16)) {
        text("Are farm cookies organic?", 200, 350);
      } else if ((splash2 == 17)) {
        text("Is opposite day even a thing anymore?", 200, 350);
      } else if ((splash2 == 18)) {
        text("Do you even read these?", 200, 350);
      } else if ((splash2 == 19)) {
        text("-splash text-", 200, 350);
      } else if ((splash2 == 20)) {
        text("cookie clicker V4 is coming up!", 200, 350);
      } else if ((splash2 == 21)) {
        text("cookie clicker V5 is coming up also!", 200, 350);
      } else if ((splash2 == 22)) {
        text("my highest score is:2486443891743 beat it!", 200, 350);
      } else {
        splash2 = randomNumber(1, 100);
      }
    }
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
