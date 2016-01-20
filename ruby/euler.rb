# defining a simple test function:
def test(fn, arg, exp)
  startTime = Time.new
  r = fn.call(arg)
  endTime = Time.new
  puts ""
  if r == exp
    puts ">> PASSED! >>"
  else
    puts "<< Failed! <<"
  end
  puts "expected : #{exp}"
  puts "result   : #{r}"
  puts "-- Time taken: #{(endTime-startTime)*1000}ms --"
end

# ##########
# problem 1
# ##########

def p1(n)
  sum = 0
  for i in 1..n-1 do
    if i%3 == 0
      sum += i
    elsif i%5 ==0
      sum += i
    end
  end
  return sum
end

test(fn = method(:p1), 10, 23)
test(fn = method(:p1), 1000, 233168)
