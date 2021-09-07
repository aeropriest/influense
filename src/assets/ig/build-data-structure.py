import os
import random
from os.path import isfile, isdir, join
i =0
print 'const CELEBERITY_IMAGES_DATA=[\n'
for handle in os.listdir('./'):
    print '{'
    if not handle.startswith('.'):
        i = i+1
        print '\tid: '+str(i)+','
        print '\thandle: "' + handle +'",'
        print '\tfollowers: '+str(random.randint(100,350))+','
        for name in os.listdir('./'+handle):            
            if not name.startswith('.') and not isfile('./'+handle+'/'+name):
                print '\tname: "' + name +'",'
                images_folder = './'+handle+'/'+name
                print '\timages: ['
                j = 0
                for image in os.listdir(images_folder):            
                    j = j+1
                    #if not image.startswith('.') and isfile(images_folder+'/'+image):
                    print '\n\t\t{ '
                    print '\t\t\timageId: ' + str(j) +','
                    print '\t\t\thighestBid: '+str(random.randint(10,800))+','
                    print '\t\t\ttimeLeft: '+str(random.randint(1000,8000))+','
                    print '\t\t\timgUrl: "' + image +'",'
                    print '\t\t}, '
                
                print '\t]'


        #for image in os.listdir('./'+handle):            
         #   if not image.startswith('.') and isdir('./'+handle+'/'+image):
          #      print "images folder '+'./'+handle+'/'+image
                # for images in os.listdir('./'+handle+'/'+name +'"/'):
                #     print '\images: "' + images + '",'

    print '},'
print '\n]'
# for subdir, dirs, files in os.walk('./'):
#     i = i+1
#     print '{'
#     for dir in files:
#         if dir != 'DS_Store':
#             print '\tid: '+str(i)+','
#             print '\tfollowers: '+str(random.randint(100,350))+','
#             print '\thighestBid: '+str(random.randint(10,800))+','
#             print '\ttimeLeft: '+str(random.randint(1000,8000))+','
#             print '\tlinkUrl: `celebrity'+'\\'+str(files[0])+'`,'
#             print '\tthumbnail: `'+str(files[0])+'`,'
#             print '\tposterUrl: `'+str(files[0])+'`,'
#     print '},'
