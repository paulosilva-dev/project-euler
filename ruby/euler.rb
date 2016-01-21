# defining a simple test function:
def test(fn, arg, exp , title)
  startTime = Time.new
  r = fn.call(arg)
  endTime = Time.new
  puts ""
  puts " -- #{title} :"
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

test(fn = method(:p1), 10, 23, "Prob1 - base test")
test(fn = method(:p1), 1000, 233168, "Prob1 - test question")

# ##########
# problem 2
# ##########

def p2(max)
  f = 1
  s = 2
  c = f+s
  sum = 2
  begin
    if c%2 == 0
      sum += c
    end
    f = s
    s = c
    c = f + s
  end while c<=max
  return sum
end

test(fn = method(:p2), 89, 44, "Prob2 - base test")
test(fn = method(:p2), 4000000, 4613732, "Prob2 - test question")
