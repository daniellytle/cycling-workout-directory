import { parseZwiftWorkoutString } from "./zwo"

const workouts = [
  `<workout_file>
<author>Marinov</author>
<name>Dijon</name>
<category>VO2 Max</category>
<description>60/60s or 60 sec ON at 121% of FTP followed by 60 sec OFF. In 2 groups by 8 reps each.</description>
<sportType>bike</sportType>
<tags>
</tags>
<workout>
  <Warmup Duration="120" PowerLow="0.32" PowerHigh="0.39"/>
  <SteadyState Duration="60" Power="0.39"/>
  <SteadyState Duration="60" Power="0.47"/>
  <SteadyState Duration="60" Power="0.55"/>
  <SteadyState Duration="60" Power="0.63"/>
  <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="0.98" OffPower="0.63"/>
  <SteadyState Duration="120" Power="0.5"/>
  <IntervalsT Repeat="8" OnDuration="60" OffDuration="60" OnPower="1.21" OffPower="0.44"/>
  <SteadyState Duration="300" Power="0.40"/>
  <IntervalsT Repeat="8" OnDuration="60" OffDuration="60" OnPower="1.21" OffPower="0.44"/>
  <SteadyState Duration="300" Power="0.40"/>
  <Cooldown Duration="300" PowerLow="0.39" PowerHigh="0.32"/>
</workout>
</workout_file>
`,
  `<workout_file>
<author>Marinov</author>
<name>Chili Pepper</name>
<category>VO2 Max</category>
<description> NOTE: This is mixed mode workout with Slope targets in the main interval groups. 40/20s or 40 sec ON at 121% of FTP followed by 20 sec OFF, in 2 groups by 10 reps each.</description>
<sportType>bike</sportType>
<tags>
</tags>
<workout>
  <Warmup Duration="120" PowerLow="0.32" PowerHigh="0.39"/>
  <SteadyState Duration="60" Power="0.39" Cadence="80"/>
  <SteadyState Duration="60" Power="0.47" Cadence="90"/>
  <SteadyState Duration="60" Power="0.55" Cadence="100"/>
  <SteadyState Duration="60" Power="0.63" Cadence="90"/>
  <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="0.98" OffPower="0.63" Cadence="100" CadenceResting="80"/>
  <SteadyState Duration="120" Power="0.5" Slope="1"/>
  <IntervalsT Repeat="10" OnDuration="40" OffDuration="20" OnPower="1.21" OffPower="0.44" OnSlope="4" OffSlope="0" Cadence="90" CadenceResting="80"/>
  <SteadyState Duration="300" Power="0.40" Slope="1"/>
  <IntervalsT Repeat="10" OnDuration="40" OffDuration="20" OnPower="1.21" OffPower="0.44" OnSlope="4" OffSlope="0"/>
  <SteadyState Duration="300" Power="0.40"/>
  <Cooldown Duration="300" PowerLow="0.39" PowerHigh="0.32" />
</workout>
</workout_file>
`,
  `<workout_file>
<author>Marinov</author>
<name>Chili Pepper +1</name>
<category>VO2 Max</category>
<description>Short but tough, this is the hardest workout ever. It's gonna burn!</description>
<sportType>bike</sportType>
<tags>
</tags>
<workout>
  <Warmup Duration="120" PowerLow="0.32" PowerHigh="0.39"/>
  <SteadyState Duration="60" Power="0.39"/>
  <SteadyState Duration="60" Power="0.47"/>
  <SteadyState Duration="60" Power="0.55"/>
  <SteadyState Duration="60" Power="0.63"/>
  <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="0.98" OffPower="0.63"/>
  <SteadyState Duration="120" Power="0.5"/>
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <FreeRide Duration="300" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="40" Power="1.31"/>
  <FreeRide Duration="20" />
  <SteadyState Duration="300" Power="0.39"/>
  <Cooldown Duration="300" PowerLow="0.39" PowerHigh="0.32"/>
</workout>
</workout_file>
`,
  `<workout_file>
<author>Marinov</author>
<name>Pasta</name>
<category>Threshold</category>
<description>A Classic 2 times 20 min at almost FTP. Make sure you had some pasta before this session. You will need it!</description>
<sportType>bike</sportType>
<tags>
</tags>
<workout>
  <Warmup Duration="120" PowerLow="0.32" PowerHigh="0.39"/>
  <SteadyState Duration="60" Power="0.39"/>
  <SteadyState Duration="60" Power="0.47"/>
  <SteadyState Duration="60" Power="0.55"/>
  <SteadyState Duration="60" Power="0.63"/>
  <IntervalsT  Repeat="2" OnDuration="30" OffDuration="30" OnPower="1.06" OffPower="0.63"/>
  <SteadyState Duration="120" Power="0.5"/>
  <SteadyState Duration="1200" Power="0.98"/>
  <SteadyState Duration="600" Power="0.44"/>
  <SteadyState Duration="1200" Power="0.98"/>
  <SteadyState Duration="300" Power="0.44"/>
  <Cooldown Duration="300" PowerLow="0.44" PowerHigh="0.32"/>
</workout>
</workout_file>`,
  `<workout_file>
<author>Marinov</author>
<name>Potato Chips</name>
<category>Threshold</category>
<description>5 by 5 min at 100% of FTP with 5 min recovery in between. Perfect to get you accustome to first intensite sessions after a base block, or just that new FTP value.</description>
<sportType>bike</sportType>
<tags>
</tags>
<workout>
  <SteadyState Duration="300" Power="0.39"/>
  <SteadyState Duration="120" Power="0.60"/>
  <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="0.98" OffPower="0.5"/>
  <SteadyState Duration="120" Power="0.56"/>
  <IntervalsT Repeat="5" OnDuration="300" OffDuration="300" OnPower="1" OffPower="0.5"/>
  <SteadyState Duration="300" Power="0.39"/>
</workout>
</workout_file>`,
  `<workout_file>
<author>Marinov</author>
<name>Maple</name>
<category>Sweet Spot</category>
<description>4 times 10 min Sweet Spot intervals with 5 min recovery in between and warm-up Ramp.</description>
<sportType>bike</sportType>
<tags>
  <tag name="sweet"/>
  <tag name="spot"/>
</tags>
<workout>
  <Warmup Duration="300" PowerLow="0.32" PowerHigh="0.75"/>
  <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="1.08" OffPower="0.44"/>
  <SteadyState Duration="180" Power="0.44"/>
  <IntervalsT Repeat="4" OnDuration="600" OffDuration="300" OnPower="0.92" OffPower="0.44"/>
  <Cooldown Duration="600" PowerLow="0.44" PowerHigh="0.32"/>
</workout>
</workout_file>`,
  `<workout_file>
<author>Marinov</author>
<name>Honey</name>
<category>Sweet Spot</category>
<description>4 times 10 min Sweet Spot intervals with 5 min recovery in between.</description>
<sportType>bike</sportType>
<workout>
  <Warmup Duration="300" PowerLow="0.32" PowerHigh="0.75"/>
  <IntervalsT Repeat="2" OnDuration="30" OffDuration="30" OnPower="1.08" OffPower="0.44"/>
  <SteadyState Duration="180" Power="0.44"/>
  <IntervalsT Repeat="3" OnDuration="900" OffDuration="300" OnPower="0.90" OffPower="0.44"/>
  <Cooldown Duration="600" PowerLow="0.44" PowerHigh="0.32"/>
</workout>
</workout_file>`,
  `<workout_file>
<author>Marinov</author>
<name>Baguette</name>
<category>Base</category>
<description>The bread and butter of Endurance training with efforts in Zone 1 and 2.</description>
<sportType>bike</sportType>
<tags>
</tags>
<workout>
  <Warmup Duration="600" PowerLow="0.32" PowerHigh="0.63"/>
  <SteadyState Duration="600" Power="0.63"/>
  <SteadyState Duration="300" Power="0.56"/>
  <SteadyState Duration="600" Power="0.71"/>
  <SteadyState Duration="300" Power="0.56"/>
  <SteadyState Duration="600" Power="0.71"/>
  <SteadyState Duration="300" Power="0.56"/>
  <SteadyState Duration="600" Power="0.71"/>
  <SteadyState Duration="300" Power="0.56"/>
  <SteadyState Duration="600" Power="0.63"/>
  <Cooldown Duration="600" PowerLow="0.63" PowerHigh="0.32"/>
</workout>
</workout_file>`,
  `<workout_file>
<author>Marinov</author>
<name>Baguette +1</name>
<category>Base</category>
<description>The bread and butter of Endurance training, with efforts in Zone 2.</description>
<sportType>bike</sportType>
<tags>
</tags>
<workout>
  <SteadyState Duration="600" Power="0.39"/>
  <SteadyState Duration="600" Power="0.63"/>
  <SteadyState Duration="300" Power="0.56"/>
  <SteadyState Duration="600" Power="0.67"/>
  <SteadyState Duration="300" Power="0.56"/>
  <SteadyState Duration="600" Power="0.71"/>
  <SteadyState Duration="300" Power="0.56"/>
  <SteadyState Duration="600" Power="0.71"/>
  <SteadyState Duration="300" Power="0.56"/>
  <SteadyState Duration="600" Power="0.71"/>
  <SteadyState Duration="300" Power="0.56"/>
  <SteadyState Duration="600" Power="0.67"/>
  <SteadyState Duration="300" Power="0.56"/>
  <SteadyState Duration="600" Power="0.63"/>
  <SteadyState Duration="600" Power="0.39"/>
</workout>
</workout_file>`,
  `<workout_file>
<author>Marinov</author>
<name>Butter</name>
<category>Base</category>
<description>The bread and butter of Endurance training, in steady Zone 2 at 67% of FTP.</description>
<sportType>bike</sportType>
<tags>
</tags>
<workout>
  <Warmup Duration="360" PowerLow="0.32" PowerHigh="0.55"/>
  <IntervalsT Repeat="2" OnDuration="60" OffDuration="60" OnPower="0.88" OffPower="0.55"/>
  <SteadyState Duration="4200" Power="0.67"/>
  <Cooldown Duration="600" PowerLow="0.67" PowerHigh="0.32"/>
</workout>
</workout_file>`,
  `<workout_file>
<author>Marinov</author>
<name>Butter+1</name>
<category>Base</category>
<description>The bread and butter of Endurance training, in steady Zone 2 at 67% of FTP.</description>
<sportType>bike</sportType>
<tags>
</tags>
<workout>
  <Warmup Duration="360" PowerLow="0.32" PowerHigh="0.55"/>
  <IntervalsT Repeat="2" OnDuration="60" OffDuration="60" OnPower="0.88" OffPower="0.55"/>
  <SteadyState Duration="6000" Power="0.67"/>
  <Cooldown Duration="600" PowerLow="0.67" PowerHigh="0.32"/>
</workout>
</workout_file>`,
  `<workout_file>
<author>Marinov</author>
<name>Blackcurrant</name>
<category>Recovery</category>
<description>A recovery ride in zone 1 at 50% of FTP.</description>
<sporttype>bike</sporttype>
<tags></tags>
<workout>
  <Warmup Duration="600" PowerLow="0.30" PowerHigh="0.5"/>
  <SteadyState Duration="2400" Power="0.5"/>
  <Cooldown Duration="600" PowerLow="0.5" PowerHigh="0.30"/>
</workout>
</workout_file>`,
  `<workout_file>
<author>Marinov</author>
<name>Blackcurrant+1</name>
<category>Recovery</category>
<description></description>
<sportType>bike</sportType>
<tags>
</tags>
<workout>
  <Warmup Duration="240" PowerLow="0.32" PowerHigh="0.60"/>
  <SteadyState Duration="60" Power="0.60"/>
  <SteadyState Duration="60" Power="0.70"/>
  <SteadyState Duration="60" Power="0.50"/>
  <IntervalsT Repeat="10" OnDuration="120" OffDuration="120" OnPower="0.58" OffPower="0.53"/>
  <Cooldown Duration="300" PowerLow="0.50" PowerHigh="0.32"/>
</workout>
</workout_file>`,
  `<workout_file>
<author>Flux</author>
<name>Ramp Test</name>
<category>Ramp Test</category>
<description>Ramp test proceeding in steps of 6% of previous FTP for 60 seconds. Do until exhoustion and take 75% of the power you did in the last interval you’ve reached. That's your new FTP.</description>
<sportType>bike</sportType>
<tags>
</tags>
<workout>
  <SteadyState Duration=" 300" Power="0.46" />
  <SteadyState Duration="60" Power="0.52" />
  <SteadyState Duration="60" Power="0.58" />
  <SteadyState Duration="60" Power="0.64" />
  <SteadyState Duration="60" Power="0.70" />
  <SteadyState Duration="60" Power="0.76" />
  <SteadyState Duration="60" Power="0.82" />
  <SteadyState Duration="60" Power="0.88" />
  <SteadyState Duration="60" Power="0.94" />
  <SteadyState Duration="60" Power="1.0" />
  <SteadyState Duration="60" Power="1.06" />
  <SteadyState Duration="60" Power="1.12" />
  <SteadyState Duration="60" Power="1.18" />
  <SteadyState Duration="60" Power="1.24" />
  <SteadyState Duration="60" Power="1.3" />
  <SteadyState Duration="60" Power="1.36" />
  <SteadyState Duration="60" Power="1.42" />
  <SteadyState Duration="60" Power="1.48" />
  <SteadyState Duration="60" Power="1.54" />
  <SteadyState Duration="60" Power="1.6" />
  <SteadyState Duration="60" Power="1.66" />
  <SteadyState Duration="60" Power="1.72" />
  <SteadyState Duration="60" Power="1.78" />
  <SteadyState Duration="60" Power="1.84" />
  <SteadyState Duration="60" Power="1.9" />
  <SteadyState Duration="60" Power="1.96" />
  <SteadyState Duration="60" Power="2.02" />
</workout>
</workout_file>`,
  `<workout_file>
  <author>Brian Cheung</author>
  <name>15x1x2</name>
  <description>1' WI
2' RI
Repeat 15x</description>
  <tags></tags>
  <workout>
    <Warmup Duration="300" PowerLow="0.25" PowerHigh="0.75"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <SteadyState Duration="60" Power="1.25"/>
    <SteadyState Duration="120" Power="0.5"/>
    <Cooldown Duration="600" PowerLow="0.5" PowerHigh="0.25"/>
  </workout>
</workout_file>`,
  `<?xml version="1.0" ?>
<workout_file>
    <author>B.Cheung</author>
    <category>SST</category>
    <name>3x10x5 Negative Split SST</name>
    <description>
        This is your typical 3x10' SST workout, but with work intervals that increase the target power from the low end of SST range (83% FTP) to the high end of FTP range (97%)
    </description>
    <tags/>
    <workout>
        <Warmup Duration="300" PowerLow="0.25173077" PowerHigh="0.75173074"/>
        <SteadyState Duration="600" Power="0.830"/>
        <FreeRide Duration="300" FlatRoad="1" />
        <SteadyState Duration="600" Power="0.900"/>
        <FreeRide Duration="300" FlatRoad="1" />
        <SteadyState Duration="600" Power="0.970"/>
        <Cooldown Duration="300" PowerLow="0.75173074" PowerHigh="0.25173077"/>
    </workout>
</workout_file>`,
  `<?xml version="1.0" ?>
<workout_file>
    <author>B.Cheung</author>
    <category>SST</category>
    <name>3x10x5 SST</name>
    <description></description>
    <tags/>
    <workout>
        <Warmup Duration="300" PowerLow="0.25173077" PowerHigh="0.75173074"/>
        <SteadyState Duration="600" Power="0.90"/>
        <FreeRide Duration="300" FlatRoad="1" />
        <SteadyState Duration="600" Power="0.90"/>
        <FreeRide Duration="300" FlatRoad="1" />
        <SteadyState Duration="600" Power="0.90"/>
        <Cooldown Duration="300" PowerLow="0.75173074" PowerHigh="0.25173077"/>
    </workout>
</workout_file>`,
  `<workout_file>
    <author>B.Cheung</author>
    <name>Active Recovery</name>
    <description>One hour of Z2</description>
    <tags>
        <tag name="RECOVERY"/>
        <tag name="Chill"/>
    </tags>
    <workout>
        <SteadyState Duration="300" Power="0.65173078"/>
        <SteadyState Duration="300" Power="0.65173078"/>
        <SteadyState Duration="300" Power="0.65173078"/>
        <SteadyState Duration="300" Power="0.65173078"/>
        <SteadyState Duration="300" Power="0.65173078"/>
        <SteadyState Duration="300" Power="0.65173078"/>
        <SteadyState Duration="300" Power="0.65173078"/>
        <SteadyState Duration="300" Power="0.65173078"/>
        <SteadyState Duration="300" Power="0.65173078"/>
        <SteadyState Duration="300" Power="0.65173078"/>
        <SteadyState Duration="300" Power="0.65173078"/>
        <SteadyState Duration="300" Power="0.65173078"/>
    </workout>
</workout_file>`,
  `<?xml version="1.0" ?>
<workout_file>
    <author>B.Cheung</author>
    <category>Threshold</category>
    <name>Descending Pyramid</name>
    <description>
    </description>
    <tags/>
    <workout>
        <Warmup Duration="600" PowerLow="0.25173077" PowerHigh="0.75173074"/>
        <SteadyState Duration="1200" PowerLow="0.90" PowerHigh="1.05"/>
        <FreeRide Duration="300" FlatRoad="1" />
        <SteadyState Duration="600" PowerLow="0.90" PowerHigh="1.05"/>
        <FreeRide Duration="300" FlatRoad="1" />
        <SteadyState Duration="300" PowerLow="0.90" PowerHigh="1.05"/>
        <FreeRide Duration="300" FlatRoad="1" />
        <Cooldown Duration="600" PowerLow="0.75173074" PowerHigh="0.25173077"/>
    </workout>
</workout_file>`,
  `<?xml version="1.0" ?>
<workout_file>
    <author>B.Cheung</author>
    <category>Threshold</category>
    <name>Drive for the Line</name>
    <description>
    </description>
    <tags/>
    <workout>
        <Warmup Duration="600" PowerLow="0.25173077" PowerHigh="0.75173074"/>
        <SteadyState Duration="1200" Power="0.850" />
        <SteadyState Duration="300" Power="0.70" />
        <SteadyState Duration="270" Power="1.0" />
        <SteadyState Duration="30" Power="1.40" />
        <SteadyState Duration="300" Power="0.70" />
        <SteadyState Duration="270" Power="1.0" />
        <SteadyState Duration="30" Power="1.40" />
        <Cooldown Duration="600" PowerLow="0.75173074" PowerHigh="0.25173077"/>
    </workout>
</workout_file>`,
  `<?xml version="1.0" ?>
<workout_file>
    <author>B.Cheung</author>
    <category>VO2</category>
    <name>Fat Boy Intervals</name>
    <description>
      Based on a running workout.  The idea was hi-intensity and reduced recovery time between intervals. The study showed an increase in the release of growth hormone when doing the workout this way as opposed to doing it the other way.
    </description>
    <tags/>
    <workout>
        <Warmup Duration="600" PowerLow="0.50" PowerHigh="0.750"/>
        <SteadyState Duration="300" Power="1.10" />
        <SteadyState Duration="300" Power="0.55" />
        <SteadyState Duration="240" Power="1.15" />
        <SteadyState Duration="240" Power="0.55" />
        <SteadyState Duration="180" Power="1.20" />
        <SteadyState Duration="180" Power="0.55" />
        <SteadyState Duration="120" Power="1.25" />
        <SteadyState Duration="120" Power="0.55" />
        <SteadyState Duration="60" Power="1.50" />
        <SteadyState Duration="60" Power="0.55" />
        <SteadyState Duration="30" Power="1.53" />
        <Cooldown Duration="600" PowerLow="0.75173074" PowerHigh="0.25173077"/>
    </workout>
</workout_file>`,
  `<?xml version="1.0" ?>
<workout_file>
    <author>B.Cheung</author>
    <category>Threshold</category>
    <name>Hour Of Power</name>
    <description>
      Quite a few years ago (circa 2002), I learned of an indoor workout called "The Hour of Power" or HOP for short. It was coined by Bill Black, a regular contributor to the Google Wattage Groups forum. The workout also features in the book, Training and Racing with a Power Meter.
    </description>
    <tags/>
    <workout>
        <Warmup Duration="300" PowerLow="0.25173077" PowerHigh="0.85173074"/>
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <SteadyState Duration="160" Power="0.90" />
        <SteadyState Duration="20" Power="1.15" />
        <Cooldown Duration="300" PowerLow="0.85173074" PowerHigh="0.25173077"/>
    </workout>
</workout_file>`,
  `<?xml version="1.0" ?>
<workout_file>
    <author>B.Cheung</author>
    <category>SST</category>
    <name>Traditional SST</name>
    <description></description>
    <tags/>
    <workout>
        <Warmup Duration="600" PowerLow="0.25173077" PowerHigh="0.75173074"/>
        <SteadyState Duration="2700" PowerLow="0.90173078" PowerHigh="0.90173078"/>
        <Cooldown Duration="600" PowerLow="0.75173074" PowerHigh="0.25173077"/>
    </workout>
</workout_file>`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>Designed to help you improve your top speed over short distances – making attacks, getting over short hills or taking a big pull at the front of the breakaway.
</description>
<category>Sufferfest</category>
    <name>Sufferfest - A Very Dark Place 2014
</name>
    <workout>
        <SteadyState Duration="250.2" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="126.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="58.8" PowerHigh="0.800" PowerLow="0.800"/>
        <SteadyState Duration="61.2" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="93.0" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="30.6" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="103.2" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="31.8" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="73.2" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="240.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="181.2" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="36.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="98.4" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="18.6" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="44.4" PowerHigh="1.120" PowerLow="1.120"/>
        <SteadyState Duration="40.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="181.8" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="20.4" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="105.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="18.6" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="40.2" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="43.8" PowerHigh="1.120" PowerLow="1.120"/>
        <SteadyState Duration="15.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="181.2" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="22.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="18.6" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="15.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="19.2" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="12.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="22.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="12.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="27.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="12.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="15.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="15.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="53.4" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="180.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="18.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="114.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="34.8" PowerHigh="1.120" PowerLow="1.120"/>
        <SteadyState Duration="19.8" PowerHigh="1.120" PowerLow="1.120"/>
        <SteadyState Duration="35.4" PowerHigh="1.120" PowerLow="1.120"/>
        <SteadyState Duration="19.8" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="291.0" PowerHigh="0.560" PowerLow="0.560"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>The essential climbing workout, featuring 10 minutes of over/unders to prepare the legs and then three brutal, eight-minute climbs 
</description>
<category>Sufferfest</category>
    <name>Sufferfest - Angels 2015
</name>
    <workout>
        <SteadyState Duration="120.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="90.0" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="61.2" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="75.6" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="61.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="19.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="40.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="42.0" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="60.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="60.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="60.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="60.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="60.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="60.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="60.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="60.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="60.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="60.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="180.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="34.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="51.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="61.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="46.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="35.4" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="22.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="34.2" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="90.6" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="87.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="16.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="240.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="7.8" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="12.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="26.4" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="123.6" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="19.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="13.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="78.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="136.8" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="12.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="51.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="240.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="28.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="15.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="57.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="15.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="24.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="14.4" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="33.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="13.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="16.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="9.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="33.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="9.6" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="13.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="15.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="37.8" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="26.4" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="60.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="13.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="24.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="21.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="204.0" PowerHigh="0.560" PowerLow="0.560"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>The essential climbing workout, featuring 10 minutes of over/unders to prepare the legs and then three brutal, eight-minute climbs
</description>
<category>Sufferfest</category>
    <name>Sufferfest - Angels
</name>
    <workout>
        <SteadyState Duration="201.0" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="223.8" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="27.0" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="34.2" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="57.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="28.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="52.8" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="61.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="55.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="58.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="57.6" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="60.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="67.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="58.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="86.4" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="60.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="64.8" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="256.8" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="34.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="40.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="26.4" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="10.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="40.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="105.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="53.4" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="102.6" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="59.4" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="283.8" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="124.8" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="125.4" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="109.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="117.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="294.0" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="22.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="12.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="21.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="20.4" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="55.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="34.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="19.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="6.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="21.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="34.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="12.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="21.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="11.4" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="27.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="13.2" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="16.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="9.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="15.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="16.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="9.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="64.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="21.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="360.6" PowerHigh="0.560" PowerLow="0.560"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>Work on that threshold endurance with this series of longer intervals that will take you right to the edge….and keep you there. Watch out for the Pain Shakes intervals before a few sustained efforts at the end suck everything else out of you. 
</description>
<category>Sufferfest</category>
<name>Sufferfest - Blender
</name>
    <workout>
        <SteadyState Duration="331.8" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="133.2" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="25.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="91.8" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="151.2" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="60.6" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="61.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="85.8" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="15.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="31.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="322.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="36.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="194.4" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="123.6" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="119.4" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="117.6" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="75.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="17.4" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="46.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="25.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="18.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="59.4" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="111.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="37.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="87.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="121.8" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="69.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="45.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="126.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="121.2" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="144.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="25.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="192.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="235.2" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="40.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="19.8" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="40.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="19.8" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="39.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="21.0" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="42.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="21.0" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="40.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="21.0" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="48.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="120.6" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="31.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="31.2" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="30.6" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="30.0" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="33.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="30.0" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="32.4" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="30.0" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="30.6" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="30.0" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="34.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="120.0" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="22.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="40.8" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="21.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="40.2" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="21.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="39.6" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="23.4" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="39.6" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="21.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="41.4" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="19.8" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="228.0" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="235.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="60.6" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="240.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="60.0" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="261.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="457.2" PowerHigh="0.460" PowerLow="0.460"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
<description> DAYT has a workout designed by elite cycling coach Sir Neal Henderson, KoS, of Apex Coaching. In it, you’ll tackle two sets of 11 intervals each. The first set is matching intervals, with efforts matching recoveries. The second set features inverse intervals, with opposite efforts and recoveries. It’s an incredible session to develop explosive, maximum power and enhance your ability to recover quickly from big efforts and go again before anyone knows what hit them.
</description>
<category>Sufferfest</category>
    <name>Sufferfest - Do As You're Told
</name>
    <workout>
        <SteadyState Duration="288.0" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="147.0" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="55.8" PowerHigh="0.830" PowerLow="0.830"/>
        <SteadyState Duration="13.2" PowerHigh="0.890" PowerLow="0.890"/>
        <SteadyState Duration="10.2" PowerHigh="0.830" PowerLow="0.830"/>
        <SteadyState Duration="60.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="60.0" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="60.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="60.6" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="74.4" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="43.8" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="10.8" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="10.2" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="19.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="20.4" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="30.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="30.0" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="39.6" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="40.2" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="12.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="3.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="1.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="4.2" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="25.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="4.8" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="49.8" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="16.2" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="12.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="16.8" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="60.0" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="50.4" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="49.8" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="40.2" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="4.8" PowerHigh="1.280" PowerLow="1.280"/>
        <SteadyState Duration="4.8" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="40.2" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="1.280" PowerLow="1.280"/>
        <SteadyState Duration="30.0" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="19.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="15.0" PowerHigh="0.830" PowerLow="0.830"/>
        <SteadyState Duration="15.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="135.0" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="45.0" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="15.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="50.4" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="19.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="40.2" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="30.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="30.0" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="39.6" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="20.4" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="37.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="7.2" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="4.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="10.2" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="60.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="54.6" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="5.4" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="16.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="6.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="27.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="10.2" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="39.6" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="20.4" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="18.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="6.0" PowerHigh="1.280" PowerLow="1.280"/>
        <SteadyState Duration="6.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="12.6" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="15.0" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="15.0" PowerHigh="0.830" PowerLow="0.830"/>
        <SteadyState Duration="17.4" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="19.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="31.8" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="28.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="186.0" PowerHigh="0.390" PowerLow="0.390"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>An essential workout for developing tremendous speed, power and recovery, this is the only cycling workout that asks you to chase back to the front in Paris-Roubaix or out-sprint the pack at the top of the Mur de Huy at the end of the Fleche Wallone.
</description>
<category>Sufferfest</category>
    <name>Sufferfest - Downward Spiral
</name>
    <workout>
        <SteadyState Duration="127.8" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="188.4" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="147.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="30.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="75.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="42.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="44.4" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="117.6" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="128.4" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="105.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="117.6" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="99.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="104.4" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="76.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="87.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="58.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="71.4" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="43.8" PowerHigh="1.190" PowerLow="1.190"/>
        <SteadyState Duration="55.8" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="30.0" PowerHigh="1.190" PowerLow="1.190"/>
        <SteadyState Duration="41.4" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="15.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="313.8" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="118.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="135.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="108.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="120.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="91.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="105.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="76.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="87.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="60.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="72.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="43.8" PowerHigh="1.190" PowerLow="1.190"/>
        <SteadyState Duration="55.2" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="30.0" PowerHigh="1.190" PowerLow="1.190"/>
        <SteadyState Duration="39.6" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="14.4" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="25.8" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="15.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="21.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="15.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="22.8" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="15.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="309.0" PowerHigh="0.460" PowerLow="0.460"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>While our other videos make you a faster rider, Elements of Style makes you a better rider. Six drills help you improve your form and efficiency on the bike. A session you should do at least once a month. 
</description>
<category>Sufferfest</category>
    <name>Sufferfest - Elements of Style
</name>
    <workout>
        <SteadyState Duration="172.2" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="237.6" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="470.4" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="39.6" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="30.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="247.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="34.2" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="48.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="60.0" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="60.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="60.0" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="60.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="60.0" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="60.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="60.0" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="60.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="66.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="46.8" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="181.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="30.6" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="27.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="73.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="135.0" PowerHigh="0.560" PowerLow="0.560"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description> Want to make your workout just a bit longer? Extra Shot is a 20 minute race simulation that you can add on to any session where you want to drag the suffering out even more. 
</description>
<category>Sufferfest</category>
    <name>Sufferfest - Extra Shot
</name>
    <workout>
        <SteadyState Duration="99.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="108.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="106.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="135.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="180.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="45.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="63.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="39.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="22.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="46.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="14.4" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="18.6" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="14.4" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="24.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="15.6" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="24.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="49.2" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="30.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="22.2" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="19.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="15.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="25.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="78.6" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="31.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="37.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="22.8" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="13.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="43.8" PowerHigh="0.560" PowerLow="0.560"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>Fight Club was designed to build power over longer durations, while increasing leg-speed through 23 (!) ‘attacks’ that will challenge you to accelerate and then recover while still making a massive effort. Here’s what you’ll get over the roughly 60 minutes:
</description>
<category>Sufferfest</category>
    <name>Sufferfest - Fight Club
</name>
    <workout>
        <SteadyState Duration="139.2" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="172.8" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="117.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="93.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="112.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="12.6" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="44.4" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="12.6" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="27.0" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="13.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="55.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="12.6" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="70.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="97.2" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="64.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="13.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="63.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="12.6" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="84.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="52.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="13.8" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="40.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="13.8" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="45.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="198.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="70.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="13.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="40.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="13.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="108.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="54.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="12.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="53.4" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="12.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="27.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="13.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="201.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="60.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="13.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="99.6" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="13.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="22.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="7.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="40.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="29.4" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="12.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="39.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="13.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="45.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="6.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="16.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="189.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="33.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="12.6" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="28.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="13.8" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="61.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="10.8" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="52.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="7.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="12.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="13.8" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="36.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="12.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="30.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="7.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="31.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="12.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="34.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="24.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="309.0" PowerHigh="0.560" PowerLow="0.560"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>Designed by British Cyclocross Champion Ian Field, this workout features two sets of twenty flat-out efforts. They’re only fifteen seconds in length, but they’ll seem like eternity. You’ll come out of it with fantastic explosive power for creating gaps behind you!
</description>
<category>Sufferfest</category>
    <name>Sufferfest - Half Is Easy
</name>
    <workout>
        <SteadyState Duration="133.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="100.2" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="81.0" PowerHigh="0.780" PowerLow="0.780"/>
        <SteadyState Duration="120.0" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="25.2" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="60.6" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="27.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="58.2" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="241.2" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="9.6" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="29.4" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="225.6" PowerHigh="0.500" PowerLow="0.500"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>The classic 2 x 20 minute workout, but with a Sufferlandrian twist, this is the story of your effort to win the Tour of Sufferlandria
</description>
<category>Sufferfest</category>
    <name>Sufferfest - Hell Hath No Fury 2013
</name>
    <workout>
        <Warmup Duration="60.0" PowerHigh="0.560" PowerLow="0.460"/>
        <Warmup Duration="166.8" PowerHigh="0.750" PowerLow="0.560"/>
        <SteadyState Duration="209.4" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="133.8" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="30.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="67.8" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="97.2" PowerHigh="0.920" PowerLow="0.920"/>
        <SteadyState Duration="60.0" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="76.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="16.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="28.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="13.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="18.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="28.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="51.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="16.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="247.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="160.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="118.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="27.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="18.6" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="39.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="61.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="30.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="91.2" PowerHigh="1.120" PowerLow="1.120"/>
        <SteadyState Duration="37.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="10.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="9.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="16.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="31.2" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="13.8" PowerHigh="1.120" PowerLow="1.120"/>
        <SteadyState Duration="18.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="25.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="361.8" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="28.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="33.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="37.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="13.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="30.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="12.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="29.4" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="12.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="22.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="9.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="31.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="37.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="12.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="39.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="13.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="99.6" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="16.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="88.8" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="18.0" PowerHigh="1.120" PowerLow="1.120"/>
        <SteadyState Duration="78.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="26.4" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="22.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="31.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="9.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="58.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="78.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="30.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="12.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="34.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="26.4" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="186.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="24.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="240.0" PowerHigh="0.460" PowerLow="0.460"/>
        <SteadyState Duration="167.4" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="33.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="286.8" PowerHigh="0.460" PowerLow="0.460"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>Need to get a massive endurance session in? Then ‘It Seemed Like a Good Idea at the Time’ is the perfect mix of long climbs, big attacks and sustained efforts
</description>
<category>Sufferfest</category>
    <name>Sufferfest - ISLAGIATT
</name>
    <workout>
        <SteadyState Duration="376.8" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="120.0" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="30.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="120.0" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="38.4" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="103.8" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="48.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="109.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="34.2" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="115.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="180.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="53.4" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="106.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="36.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="96.0" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="28.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="165.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="16.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="19.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="40.8" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="13.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="32.4" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="54.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="49.8" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="184.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="183.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="84.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="88.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="12.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="22.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="66.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="10.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="76.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="12.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="67.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="16.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="179.4" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="52.8" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="49.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="165.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="6.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="18.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="102.6" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="19.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="19.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="6.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="123.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="300.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="194.4" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="43.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="181.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="19.8" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="69.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="16.2" PowerHigh="1.020" PowerLow="1.020"/>
        <SteadyState Duration="21.6" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="27.0" PowerHigh="0.970" PowerLow="0.970"/>
        <SteadyState Duration="115.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="73.2" PowerHigh="0.970" PowerLow="0.970"/>
        <SteadyState Duration="27.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="25.8" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="31.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="60.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="159.6" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="61.2" PowerHigh="1.020" PowerLow="1.020"/>
        <SteadyState Duration="43.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="30.6" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="70.2" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="46.2" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="30.6" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="25.2" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="214.2" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="30.6" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="75.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="26.4" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="19.8" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="40.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="89.4" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="33.0" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="43.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="10.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="51.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="39.6" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="36.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="10.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="18.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="13.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="21.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="15.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="30.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="131.4" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="16.8" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="39.0" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="22.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="57.0" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="15.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="9.0" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="10.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="16.8" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="24.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="10.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="34.8" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="21.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="7.2" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="22.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="11.4" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="87.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="50.4" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="10.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="16.8" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="342.0" PowerHigh="0.560" PowerLow="0.560"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>Local Hero has everything but the kitchen sink: time trials, criterium, cyclocross, road racing and historic sprints. A perfect workout to get both variety and endurance in. 
</description>
<category>Sufferfest</category>
    <name>Sufferfest - Local Hero
</name>
    <workout>
        <SteadyState Duration="223.2" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="357.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="31.8" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="28.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="58.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="63.0" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="43.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="15.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="99.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="63.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="60.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="115.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="63.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="63.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="132.0" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="61.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="59.4" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="121.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="58.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="72.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="133.2" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="58.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="58.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="123.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="60.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="52.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="186.6" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="80.4" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="97.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="130.2" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="183.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="126.6" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="180.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="135.0" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="13.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="169.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="131.4" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="178.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="100.8" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="60.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="47.4" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="19.8" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="106.8" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="59.4" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="33.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="17.4" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="51.0" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="60.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="42.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="16.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="61.2" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="60.6" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="39.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="14.4" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="48.0" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="394.8" PowerHigh="0.560" PowerLow="0.560"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>Is this our hardest workout? Featuring nine Vo2 and threshold intervals, this session will take you to the edge, push you over it and send a flaming river of lava down on top of you. You’ll love it. 
</description>
<category>Sufferfest</category>
    <name>Sufferfest - Nine Hammers
</name>
    <workout>
        <SteadyState Duration="162.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="60.0" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="18.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="31.8" PowerHigh="0.720" PowerLow="0.720"/>
        <SteadyState Duration="16.2" PowerHigh="0.830" PowerLow="0.830"/>
        <SteadyState Duration="21.0" PowerHigh="0.720" PowerLow="0.720"/>
        <SteadyState Duration="10.2" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="60.0" PowerHigh="0.830" PowerLow="0.830"/>
        <SteadyState Duration="30.0" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="9.6" PowerHigh="1.280" PowerLow="1.280"/>
        <SteadyState Duration="60.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="90.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="60.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="120.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="30.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="34.2" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="25.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="120.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="20.4" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="3.6" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="5.4" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="6.6" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="4.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="19.8" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="60.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="45.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="120.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="59.4" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="15.6" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="30.0" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="105.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="150.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="89.4" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="90.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="90.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="120.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="165.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="15.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="90.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="60.6" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="29.4" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="60.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="30.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="180.6" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="180.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="119.4" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="30.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="6.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="10.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="73.2" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="60.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="90.6" PowerHigh="0.720" PowerLow="0.720"/>
        <SteadyState Duration="60.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="60.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="60.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="201.0" PowerHigh="0.390" PowerLow="0.390"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>Simple. Brutal. Uncomplicated. This is a workout you don’t have to think about. You just get on, drive yourself into the ground, and get off. Featuring sixteen one minute intervals with one minute recoveries. 
</description>
<category>Sufferfest</category>
    <name>Sufferfest - Revolver
</name>
    <workout>
        <SteadyState Duration="154.2" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="241.8" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="105.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="130.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="40.8" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="61.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="63.6" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="62.4" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="60.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="63.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="60.6" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="63.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="65.4" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="63.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="60.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="60.6" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="63.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="59.4" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="60.6" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="60.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="60.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="64.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="61.8" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="79.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="58.2" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="60.6" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="61.2" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="61.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="61.8" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="60.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="63.0" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="64.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="60.6" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="62.4" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="60.6" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="60.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="352.2" PowerHigh="0.560" PowerLow="0.560"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>Designed by the expert coaches at Dig Deep Coaching, this one hour workout is specifically designed to get you ready for, and then do, a 20 minute cycling Functional Threshold Performance test. 
</description>
<category>Sufferfest</category>
    <name>Sufferfest - Rubber Glove
</name>
    <workout>
        <SteadyState Duration="529.2" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="181.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="180.0" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="180.0" PowerHigh="0.720" PowerLow="0.720"/>
        <SteadyState Duration="181.2" PowerHigh="0.830" PowerLow="0.830"/>
        <SteadyState Duration="180.0" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="180.0" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="60.0" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="60.0" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="60.0" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="60.0" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="60.0" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="60.0" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="60.0" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="180.6" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="301.2" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="301.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="300.6" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="300.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="194.4" PowerHigh="0.390" PowerLow="0.390"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>Absolutely essential for anyone racing criteriums or cyclocross, TBTITW is one of our best sessions for developing high-end power, recovery and mental strength at the end of a scrappy, aggressive race or killer group ride.
</description>
<category>Sufferfest</category>
    <name>Sufferfest - The Best Thing In The World
</name>
    <workout>
        <SteadyState Duration="228.0" PowerHigh="0.390" PowerLow="0.390"/>
        <SteadyState Duration="139.2" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="73.8" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="70.8" PowerHigh="0.720" PowerLow="0.720"/>
        <SteadyState Duration="80.4" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="40.8" PowerHigh="0.720" PowerLow="0.720"/>
        <SteadyState Duration="58.8" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="60.0" PowerHigh="0.720" PowerLow="0.720"/>
        <SteadyState Duration="61.2" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="33.0" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="30.0" PowerHigh="0.830" PowerLow="0.830"/>
        <SteadyState Duration="13.8" PowerHigh="0.720" PowerLow="0.720"/>
        <SteadyState Duration="10.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="21.0" PowerHigh="0.830" PowerLow="0.830"/>
        <SteadyState Duration="16.8" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="24.0" PowerHigh="0.830" PowerLow="0.830"/>
        <SteadyState Duration="51.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="18.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="66.0" PowerHigh="0.720" PowerLow="0.720"/>
        <SteadyState Duration="27.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="14.4" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="57.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="24.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="9.0" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="19.8" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="33.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="61.8" PowerHigh="0.720" PowerLow="0.720"/>
        <SteadyState Duration="5.4" PowerHigh="0.780" PowerLow="0.780"/>
        <SteadyState Duration="22.8" PowerHigh="0.720" PowerLow="0.720"/>
        <SteadyState Duration="28.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="31.2" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="22.8" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="11.4" PowerHigh="1.280" PowerLow="1.280"/>
        <SteadyState Duration="27.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="15.0" PowerHigh="1.280" PowerLow="1.280"/>
        <SteadyState Duration="15.6" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="22.2" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="6.0" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="16.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="45.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="10.8" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="4.8" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="2.4" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="4.8" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="6.0" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="16.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="180.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="103.8" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="16.8" PowerHigh="1.280" PowerLow="1.280"/>
        <SteadyState Duration="44.4" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="60.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="60.0" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="21.6" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="6.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="23.4" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="21.6" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="5.4" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="19.8" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="22.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="45.6" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="15.0" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="43.2" PowerHigh="0.830" PowerLow="0.830"/>
        <SteadyState Duration="22.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="22.2" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="39.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="15.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="13.2" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="6.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="24.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="21.6" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="40.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="60.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="30.0" PowerHigh="1.210" PowerLow="1.210"/>
        <SteadyState Duration="13.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="181.2" PowerHigh="0.390" PowerLow="0.390"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>One of our most popular sessions, this workout features a 20 minute climb followed by five brutal minutes of inverse intervals.
</description>
<category>Sufferfest</category>
    <name>Sufferfest - The Hunted
</name>
    <workout>
        <SteadyState Duration="226.8" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="169.2" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="66.0" PowerHigh="0.800" PowerLow="0.800"/>
        <SteadyState Duration="85.2" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="52.8" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="30.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="316.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="170.4" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="270.6" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="30.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="85.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="31.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="36.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="192.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="110.4" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="51.6" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="159.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="10.2" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="88.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="145.2" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="358.2" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="24.6" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="36.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="138.0" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="21.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="144.0" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="50.4" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="9.6" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="42.0" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="20.4" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="33.0" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="30.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="21.6" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="40.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="10.8" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="52.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="33.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="297.0" PowerHigh="0.660" PowerLow="0.660"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>Love time trials? Then you’ll love to hate The Long Scream, which demands you keep up with the world’s best cyclists at the World Triathlon Championships for 35 agonising minutes.
</description>
<category>Sufferfest</category>
    <name>Sufferfest - The Long Scream
</name>
    <workout>
        <SteadyState Duration="121.8" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="82.2" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="45.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="9.0" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="46.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="10.8" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="81.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="156.0" PowerHigh="0.970" PowerLow="0.970"/>
        <SteadyState Duration="42.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="7.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="39.6" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="8.4" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="15.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="6.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="3.6" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="5.4" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="76.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="9.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="115.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="102.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="7.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="37.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="6.6" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="94.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="6.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="52.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="4.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="144.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="4.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="24.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="10.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="57.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="25.8" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="6.0" PowerHigh="1.020" PowerLow="1.020"/>
        <SteadyState Duration="47.4" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="7.8" PowerHigh="1.020" PowerLow="1.020"/>
        <SteadyState Duration="64.2" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="6.6" PowerHigh="1.020" PowerLow="1.020"/>
        <SteadyState Duration="158.4" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="6.0" PowerHigh="1.020" PowerLow="1.020"/>
        <SteadyState Duration="28.8" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="6.0" PowerHigh="1.020" PowerLow="1.020"/>
        <SteadyState Duration="34.8" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="48.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="10.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="55.2" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="6.6" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="14.4" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="4.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="18.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="6.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="16.8" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="159.0" PowerHigh="0.560" PowerLow="0.560"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<workout_file>
   <description>The Rookie, which lasts 55 minutes, is a race simulation based on 3 x 10 minute intervals. Itâ€™s perfect for developing the strength, speed and endurance necessary for handling those criticial â€˜crunch timeâ€™ moments in races.
  </description>
  <category>Sufferfest</category>
  <name>Sufferfest - The Rookie</name>
  <workout>
    <SteadyState Duration="199.8" PowerHigh="0.4" PowerLow="0.4" />
    <SteadyState Duration="120" PowerHigh="0.5" PowerLow="0.5" />
    <SteadyState Duration="120" PowerHigh="0.74" PowerLow="0.74" />
    <SteadyState Duration="60" PowerHigh="0.84" PowerLow="0.84" />
    <SteadyState Duration="16.7999999999999" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="7.20000000000016" PowerHigh="0.94" PowerLow="0.94" />
    <SteadyState Duration="4.79999999999995" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="31.1999999999999" PowerHigh="0.99" PowerLow="0.99" />
    <SteadyState Duration="46.2" PowerHigh="0.4" PowerLow="0.4" />
    <SteadyState Duration="60" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="120" PowerHigh="0.4" PowerLow="0.4" />
    <SteadyState Duration="120" PowerHigh="0.89" PowerLow="0.89" />
    <SteadyState Duration="30" PowerHigh="0.74" PowerLow="0.74" />
    <SteadyState Duration="9.60000000000002" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="27" PowerHigh="0.99" PowerLow="0.99" />
    <SteadyState Duration="37.1999999999999" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="21" PowerHigh="0.99" PowerLow="0.99" />
    <SteadyState Duration="6.00000000000023" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="17.9999999999998" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="31.2" PowerHigh="0.74" PowerLow="0.74" />
    <SteadyState Duration="30.5999999999999" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="5.40000000000009" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="3.60000000000014" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="5.39999999999986" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="3.59999999999991" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="5.40000000000009" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="21.5999999999999" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="5.40000000000009" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="9.59999999999991" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="5.40000000000009" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="19.8000000000002" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="4.19999999999982" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="30" PowerHigh="0.74" PowerLow="0.74" />
    <SteadyState Duration="64.8" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="43.8" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="30" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="10.2" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="210" PowerHigh="0.4" PowerLow="0.4" />
    <SteadyState Duration="12.0000000000002" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="55.1999999999998" PowerHigh="0.99" PowerLow="0.99" />
    <SteadyState Duration="54" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="24.6000000000001" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="35.3999999999999" PowerHigh="1.14" PowerLow="1.14" />
    <SteadyState Duration="19.8" PowerHigh="0.64" PowerLow="0.64" />
    <SteadyState Duration="9" PowerHigh="1.24" PowerLow="1.24" />
    <SteadyState Duration="9" PowerHigh="0.99" PowerLow="0.99" />
    <SteadyState Duration="4.20000000000005" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="4.79999999999995" PowerHigh="0.99" PowerLow="0.99" />
    <SteadyState Duration="4.80000000000018" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="14.3999999999999" PowerHigh="0.99" PowerLow="0.99" />
    <SteadyState Duration="4.80000000000018" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="49.1999999999998" PowerHigh="0.99" PowerLow="0.99" />
    <SteadyState Duration="15.5999999999999" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="5.40000000000009" PowerHigh="1.14" PowerLow="1.14" />
    <SteadyState Duration="39" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="19.8" PowerHigh="0.74" PowerLow="0.74" />
    <SteadyState Duration="28.2" PowerHigh="1.14" PowerLow="1.14" />
    <SteadyState Duration="4.79999999999973" PowerHigh="1.19" PowerLow="1.19" />
    <SteadyState Duration="7.20000000000027" PowerHigh="1.14" PowerLow="1.14" />
    <SteadyState Duration="28.8" PowerHigh="0.84" PowerLow="0.84" />
    <SteadyState Duration="79.2" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="3.59999999999991" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="8.40000000000009" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="30" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="19.8000000000002" PowerHigh="1.19" PowerLow="1.19" />
    <SteadyState Duration="19.7999999999997" PowerHigh="0.89" PowerLow="0.89" />
    <SteadyState Duration="8.40000000000009" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="15.5999999999999" PowerHigh="1.19" PowerLow="1.19" />
    <SteadyState Duration="6" PowerHigh="0.89" PowerLow="0.89" />
    <SteadyState Duration="9" PowerHigh="1.24" PowerLow="1.24" />
    <SteadyState Duration="10.1999999999998" PowerHigh="1.5" PowerLow="1.5" />
    <SteadyState Duration="79.8000000000002" PowerHigh="0.4" PowerLow="0.4" />
    <SteadyState Duration="101.4" PowerHigh="0.4" PowerLow="0.4" />
    <SteadyState Duration="28.7999999999997" PowerHigh="0.99" PowerLow="0.99" />
    <SteadyState Duration="24" PowerHigh="1.14" PowerLow="1.14" />
    <SteadyState Duration="7.20000000000027" PowerHigh="0.89" PowerLow="0.89" />
    <SteadyState Duration="45" PowerHigh="0.99" PowerLow="0.99" />
    <SteadyState Duration="45" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="54.5999999999999" PowerHigh="0.99" PowerLow="0.99" />
    <SteadyState Duration="5.40000000000009" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="48" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="12" PowerHigh="1.14" PowerLow="1.14" />
    <SteadyState Duration="24" PowerHigh="0.89" PowerLow="0.89" />
    <SteadyState Duration="9.59999999999991" PowerHigh="0.84" PowerLow="0.84" />
    <SteadyState Duration="5.40000000000009" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="51" PowerHigh="0.89" PowerLow="0.89" />
    <SteadyState Duration="45" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="4.80000000000018" PowerHigh="1.14" PowerLow="1.14" />
    <SteadyState Duration="34.7999999999997" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="5.40000000000009" PowerHigh="1.14" PowerLow="1.14" />
    <SteadyState Duration="37.7999999999997" PowerHigh="0.99" PowerLow="0.99" />
    <SteadyState Duration="6" PowerHigh="0.84" PowerLow="0.84" />
    <SteadyState Duration="7.20000000000027" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="15.5999999999999" PowerHigh="0.99" PowerLow="0.99" />
    <SteadyState Duration="21.0000000000005" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="15" PowerHigh="1.09" PowerLow="1.09" />
    <SteadyState Duration="23.3999999999996" PowerHigh="1.04" PowerLow="1.04" />
    <SteadyState Duration="4.80000000000018" PowerHigh="0.84" PowerLow="0.84" />
    <SteadyState Duration="7.79999999999973" PowerHigh="1.14" PowerLow="1.14" />
    <SteadyState Duration="10.1999999999998" PowerHigh="1.5" PowerLow="1.5" />
    <SteadyState Duration="250.2" PowerHigh="0.4" PowerLow="0.4" />
  </workout>
</workout_file>`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>This workout does not have a clear structure. But that’s how road races are – you have a general idea of what the course is like, but you don’t really know how the race will unfold. So, The Wretched will keep you guessing – and anticipating what your rivals are going to do. You’ll never know when an attack is coming – and they usually come when you most wish they wouldn’t.
</description>
<category>Sufferfest</category>
    <name>Sufferfest - The Wretched
</name>
    <workout>
        <SteadyState Duration="295.8" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="96.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="101.4" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="66.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="42.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="24.6" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="7.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="12.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="13.2" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="9.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="33.6" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="6.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="19.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="16.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="25.2" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="34.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="16.8" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="16.8" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="79.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="96.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="16.2" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="13.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="37.2" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="69.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="51.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="18.6" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="54.0" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="20.4" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="19.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="16.8" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="25.2" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="30.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="16.8" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="47.4" PowerHigh="1.020" PowerLow="1.020"/>
        <SteadyState Duration="15.6" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="7.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="88.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="28.8" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="37.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="18.6" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="72.0" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="18.0" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="9.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="24.0" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="16.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="25.8" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="19.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="28.8" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="42.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="13.2" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="72.0" PowerHigh="1.020" PowerLow="1.020"/>
        <SteadyState Duration="135.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="16.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="178.2" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="61.8" PowerHigh="1.120" PowerLow="1.120"/>
        <SteadyState Duration="14.4" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="28.8" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="28.2" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="15.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="49.8" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="18.0" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="16.2" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="13.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="28.8" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="51.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="50.4" PowerHigh="1.120" PowerLow="1.120"/>
        <SteadyState Duration="18.6" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="260.4" PowerHigh="0.660" PowerLow="0.660"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>When you think you’re going fast and then you have to go faster? That’s racing and that’s what TINT prepares you for: each interval gets faster and faster, helping you break through new barriers. 
</description>
<category>Sufferfest</category>
    <name>Sufferfest - There Is No Try
</name>
    <workout>
        <SteadyState Duration="277.2" PowerHigh="0.560" PowerLow="0.560"/>
        <SteadyState Duration="120.6" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="60.0" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="32.4" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="22.8" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="28.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="62.4" PowerHigh="0.900" PowerLow="0.900"/>
        <SteadyState Duration="15.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="15.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="15.6" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="15.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="76.2" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="30.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="30.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="31.2" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="18.0" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="13.8" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="79.8" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="45.0" PowerHigh="0.970" PowerLow="0.970"/>
        <SteadyState Duration="46.2" PowerHigh="1.020" PowerLow="1.020"/>
        <SteadyState Duration="42.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="28.8" PowerHigh="1.120" PowerLow="1.120"/>
        <SteadyState Duration="18.0" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="74.4" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="63.0" PowerHigh="0.970" PowerLow="0.970"/>
        <SteadyState Duration="57.6" PowerHigh="1.020" PowerLow="1.020"/>
        <SteadyState Duration="60.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="60.0" PowerHigh="1.120" PowerLow="1.120"/>
        <SteadyState Duration="108.0" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="121.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="120.0" PowerHigh="0.970" PowerLow="0.970"/>
        <SteadyState Duration="118.8" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="123.0" PowerHigh="1.020" PowerLow="1.020"/>
        <SteadyState Duration="135.0" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="61.2" PowerHigh="0.970" PowerLow="0.970"/>
        <SteadyState Duration="58.8" PowerHigh="1.020" PowerLow="1.020"/>
        <SteadyState Duration="60.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="61.2" PowerHigh="1.120" PowerLow="1.120"/>
        <SteadyState Duration="109.2" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="43.8" PowerHigh="0.970" PowerLow="0.970"/>
        <SteadyState Duration="46.2" PowerHigh="1.020" PowerLow="1.020"/>
        <SteadyState Duration="43.8" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="48.0" PowerHigh="1.120" PowerLow="1.120"/>
        <SteadyState Duration="84.0" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="30.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="30.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="30.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="31.8" PowerHigh="1.140" PowerLow="1.140"/>
        <SteadyState Duration="76.2" PowerHigh="0.660" PowerLow="0.660"/>
        <SteadyState Duration="15.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="15.0" PowerHigh="1.050" PowerLow="1.050"/>
        <SteadyState Duration="15.0" PowerHigh="1.090" PowerLow="1.090"/>
        <SteadyState Duration="19.8" PowerHigh="1.240" PowerLow="1.240"/>
        <SteadyState Duration="255.0" PowerHigh="0.750" PowerLow="0.750"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>To Get to the Other Side features varying efforts and cadences. Aside from a couple of brief leg-openers, you’ll spend the entire workout just below threshold, making it a perfect session for base building or tempo rides between your regular Sufferfest sessions.
</description>
<category>Sufferfest</category>
    <name>Sufferfest - To Get To The Other Side
</name>
    <workout>
        <Warmup Duration="259.8" PowerHigh="0.550" PowerLow="0.400"/>
        <SteadyState Duration="50.4" PowerHigh="0.550" PowerLow="0.550"/>
        <SteadyState Duration="97.8" PowerHigh="0.650" PowerLow="0.650"/>
        <SteadyState Duration="60.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="109.8" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="130.2" PowerHigh="0.950" PowerLow="0.950"/>
        <SteadyState Duration="117.0" PowerHigh="0.400" PowerLow="0.400"/>
        <SteadyState Duration="79.8" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="120.0" PowerHigh="1.000" PowerLow="1.000"/>
        <SteadyState Duration="30.0" PowerHigh="1.200" PowerLow="1.200"/>
        <SteadyState Duration="45.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="59.4" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="57.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="58.8" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="60.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="120.0" PowerHigh="0.400" PowerLow="0.400"/>
        <SteadyState Duration="90.0" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="84.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="82.8" PowerHigh="0.650" PowerLow="0.650"/>
        <SteadyState Duration="72.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="90.0" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="181.2" PowerHigh="0.400" PowerLow="0.400"/>
        <SteadyState Duration="118.2" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="121.8" PowerHigh="0.650" PowerLow="0.650"/>
        <SteadyState Duration="120.0" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="112.8" PowerHigh="0.650" PowerLow="0.650"/>
        <SteadyState Duration="100.2" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="180.0" PowerHigh="0.400" PowerLow="0.400"/>
        <SteadyState Duration="181.2" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="180.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="178.8" PowerHigh="0.650" PowerLow="0.650"/>
        <SteadyState Duration="198.0" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="142.8" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="179.4" PowerHigh="0.400" PowerLow="0.400"/>
        <SteadyState Duration="244.8" PowerHigh="0.650" PowerLow="0.650"/>
        <SteadyState Duration="238.2" PowerHigh="0.750" PowerLow="0.750"/>
        <SteadyState Duration="247.8" PowerHigh="0.850" PowerLow="0.850"/>
        <SteadyState Duration="124.8" PowerHigh="0.650" PowerLow="0.650"/>
        <SteadyState Duration="179.4" PowerHigh="0.400" PowerLow="0.400"/>
        <SteadyState Duration="30.0" PowerHigh="0.650" PowerLow="0.650"/>
        <SteadyState Duration="60.0" PowerHigh="0.400" PowerLow="0.400"/>
        <SteadyState Duration="30.0" PowerHigh="0.650" PowerLow="0.650"/>
        <SteadyState Duration="60.0" PowerHigh="0.400" PowerLow="0.400"/>
        <SteadyState Duration="30.0" PowerHigh="0.650" PowerLow="0.650"/>
        <SteadyState Duration="60.0" PowerHigh="0.400" PowerLow="0.400"/>
        <SteadyState Duration="30.0" PowerHigh="0.650" PowerLow="0.650"/>
        <SteadyState Duration="295.8" PowerHigh="0.400" PowerLow="0.400"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <description>Few of us are born sprinters. So Violator is going to make you one. This session takes you through 64 (yes, 64) sprints of 5, 10 and 15 seconds 
</description>
<category>Sufferfest</category>
    <name>Sufferfest - Violator</name>
    <workout>
        <SteadyState Duration="280.2" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="184.8" PowerHigh="0.610" PowerLow="0.610"/>
        <SteadyState Duration="111.0" PowerHigh="0.720" PowerLow="0.720"/>
        <SteadyState Duration="63.0" PowerHigh="0.830" PowerLow="0.830"/>
        <SteadyState Duration="55.2" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="63.6" PowerHigh="0.940" PowerLow="0.940"/>
        <SteadyState Duration="61.2" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="60.0" PowerHigh="1.070" PowerLow="1.070"/>
        <SteadyState Duration="118.2" PowerHigh="0.720" PowerLow="0.720"/>
        <SteadyState Duration="4.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="31.2" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="4.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="30.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="4.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="29.4" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="6.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="28.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="4.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="30.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="6.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="29.4" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="6.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="28.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="4.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="30.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="6.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="29.4" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="6.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="28.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="6.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="30.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="4.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="30.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="10.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="58.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="11.4" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="60.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="9.6" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="60.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="10.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="60.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="10.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="60.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="9.6" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="60.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="10.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="60.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="10.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="60.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="90.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="90.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="90.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="90.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="90.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="180.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="3.6" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="5.4" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="4.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="6.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="13.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="6.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="14.4" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="6.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="13.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="6.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="13.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="6.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="14.4" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="6.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="13.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="4.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="11.4" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="28.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="10.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="29.4" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="10.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="28.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="10.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="30.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="10.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="29.4" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="9.6" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="30.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="11.4" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="28.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="10.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="30.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.6" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="44.4" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.6" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="45.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="45.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="164.4" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="4.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="4.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="4.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="4.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="5.4" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="4.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="4.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="5.4" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="4.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="4.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="5.4" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="4.8" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="4.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="5.4" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="4.8" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="10.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="9.6" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="10.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="10.2" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="9.6" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="10.2" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="10.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="9.6" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="10.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="10.2" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="9.6" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="10.2" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="15.0" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="15.0" PowerHigh="0.500" PowerLow="0.500"/>
        <SteadyState Duration="16.2" PowerHigh="1.350" PowerLow="1.350"/>
        <SteadyState Duration="288.0" PowerHigh="0.500" PowerLow="0.500"/>
    </workout>
</workout_file>

`,
  `<?xml version="1.0" ?>
<workout_file>
    <author>B.Cheung</author>
    <category>Threshold</category>
    <name>Tempo Bursts</name>
    <description>
    </description>
    <tags/>
    <workout>
        <Warmup Duration="600" PowerLow="0.250" PowerHigh="0.850"/>
        <SteadyState Duration="120" Power="0.900" />
        <SteadyState Duration="5" Power="1.731" />
        <SteadyState Duration="120" Power="0.900" />
        <SteadyState Duration="5" Power="1.731" />
        <SteadyState Duration="120" Power="0.900" />
        <SteadyState Duration="5" Power="1.731" />
        <SteadyState Duration="120" Power="0.900" />
        <SteadyState Duration="5" Power="1.731" />
        <FreeRide Duration="240" FlatRoad="1" />
        <SteadyState Duration="120" Power="0.900" />
        <SteadyState Duration="5" Power="1.731" />
        <SteadyState Duration="120" Power="0.900" />
        <SteadyState Duration="5" Power="1.731" />
        <SteadyState Duration="120" Power="0.900" />
        <SteadyState Duration="5" Power="1.731" />
        <SteadyState Duration="120" Power="0.900" />
        <SteadyState Duration="5" Power="1.731" />
        <FreeRide Duration="240" FlatRoad="1" />
        <SteadyState Duration="120" Power="0.900" />
        <SteadyState Duration="5" Power="1.731" />
        <SteadyState Duration="120" Power="0.900" />
        <SteadyState Duration="5" Power="1.731" />
        <SteadyState Duration="120" Power="0.900" />
        <SteadyState Duration="5" Power="1.731" />
        <SteadyState Duration="120" Power="0.900" />
        <SteadyState Duration="5" Power="1.731" />
        <Cooldown Duration="600" PowerLow="0.75173074" PowerHigh="0.25173077"/>
    </workout>
</workout_file>`,
  `<?xml version="1.0" ?>
<workout_file>
    <author>B.Cheung</author>
    <category>Threshold</category>
    <name>ZeCanon Intervals</name>
    <description>
    </description>
    <tags/>
    <workout>
        <Warmup Duration="600" PowerLow="0.25173077" PowerHigh="0.75173074"/>
        <SteadyState Duration="300" PowerLow="1.03" PowerHigh="1.03"/>
	    <FreeRide Duration="60" FlatRoad="1" />
        <SteadyState Duration="300" PowerLow="1.03" PowerHigh="1.03"/>
        <FreeRide Duration="60" FlatRoad="1" />
        <SteadyState Duration="300" PowerLow="1.03" PowerHigh="1.03"/>
        <FreeRide Duration="60" FlatRoad="1" />
        <SteadyState Duration="300" PowerLow="1.03" PowerHigh="1.03"/>
        <FreeRide Duration="60" FlatRoad="1" />
        <SteadyState Duration="300" PowerLow="1.03" PowerHigh="1.03"/>
        <FreeRide Duration="60" FlatRoad="1" />
        <SteadyState Duration="300" PowerLow="1.03" PowerHigh="1.03"/>
        <FreeRide Duration="60" FlatRoad="1" />
        <Cooldown Duration="600" PowerLow="0.75173074" PowerHigh="0.25173077"/>
    </workout>
</workout_file>`,
  `<?xml version="1.0" ?>
<workout_file>
    <author>Shane Miller Dr. Stephen Lane</author>
    <name>Step Test p/b HPTek</name>
    <description>STEP TEST p/b HPTek

- *IMPORTANT* Set your FTP to 100W before starting this workout.
- Complete the test through to failure.
- Record your failure stage and duration in seconds.
- Calculate your MAP and estimated FTP. (as per documentation)
- Calculate 105% of your FTP and perform the 20minute FTP test to validate the figures.

- Contact HPTek.com.au if you want to perform this under true lab conditions under the watchful eye of Dr Stephen Lane. </description>
    <sportType>bike</sportType>
    <tags>
        <tag name="INTERVALS"/>
        <tag name="FTP"/>
        <tag name="STEPTEST"/>
    </tags>
    <workout>
        <FreeRide Duration="600" FlatRoad="1">
            <textevent timeoffset="0" message="Warm Up: 10 minute FREE RIDE"/>
        </FreeRide>
        <SteadyState Duration="150" Power="1.5"/>
        <SteadyState Duration="150" Power="1.75"/>
        <SteadyState Duration="150" Power="2"/>
        <SteadyState Duration="150" Power="2.25"/>
        <SteadyState Duration="150" Power="2.5"/>
        <SteadyState Duration="150" Power="2.75"/>
        <SteadyState Duration="150" Power="3"/>
        <SteadyState Duration="150" Power="3.25"/>
        <SteadyState Duration="150" Power="3.5"/>
        <SteadyState Duration="150" Power="3.75"/>
        <SteadyState Duration="150" Power="4"/>
        <SteadyState Duration="150" Power="4.25"/>
        <SteadyState Duration="150" Power="4.5"/>
        <SteadyState Duration="150" Power="4.75"/>
        <SteadyState Duration="150" Power="5"/>
        <SteadyState Duration="150" Power="5.25"/>
        <SteadyState Duration="150" Power="5.5"/>
        <SteadyState Duration="150" Power="5.75"/>
        <SteadyState Duration="150" Power="6"/>
    </workout>
</workout_file>`,
  `<workout_file>
  <author>Brian Cheung</author>
  <name>FasCat</name>
  <description>For the ON intervals your target should be 120% FTP.  Note that after the second ON interval the rest interval is doubled to eight minutes.</description>
  <tags></tags>
  <workout>
    <Warmup Duration="300" PowerLow="0.25" PowerHigh="0.75"/>
    <SteadyState Duration="240" Power="1.2"/>
    <SteadyState Duration="240" Power="0.5"/>
    <SteadyState Duration="240" Power="1.2"/>
    <SteadyState Duration="480" Power="0.5"/>
    <SteadyState Duration="240" Power="1.2"/>
    <SteadyState Duration="240" Power="0.5"/>
    <SteadyState Duration="240" Power="1.2"/>
    <Cooldown Duration="300" PowerLow="0.75" PowerHigh="0.25"/>
  </workout>
</workout_file>`,
  `<workout_file>
  <author>Brian Cheung</author>
  <name>Plus30</name>
  <description>Add 30" each additional interval.  Maintain 113% power.  See how long you can last.  Skip intervals when you're cooked.</description>
  <tags></tags>
  <workout>
    <Warmup Duration="300" PowerLow="0.25" PowerHigh="0.75"/>
    <SteadyState Duration="180" Power="1.13"/>
    <SteadyState Duration="180" Power="0.5"/>
    <SteadyState Duration="210" Power="1.13"/>
    <SteadyState Duration="180" Power="0.5"/>
    <SteadyState Duration="240" Power="1.13"/>
    <SteadyState Duration="210" Power="0.5"/>
    <SteadyState Duration="270" Power="1.13"/>
    <Cooldown Duration="210" PowerLow="0.5" PowerHigh="0.5"/>
    <SteadyState Duration="300" Power="1.13"/>
    <SteadyState Duration="210" Power="0.5"/>
    <SteadyState Duration="330" Power="1.13"/>
    <SteadyState Duration="210" Power="0.5"/>
    <SteadyState Duration="360" Power="1.13"/>
    <Cooldown Duration="300" PowerLow="0.75" PowerHigh="0.25"/>
  </workout>
</workout_file>`,
  `<workout_file>
  <author>Brian Cheung</author>
  <name>ZeCanon Intervals</name>
  <description>The goal, as I've said before, is optimal (maximal) fiber recruitment. The first two feel easy - your anaerobic system is providing a good portion of the power. 3-end, you have exhausted anaerobic power and are relying entirely on the aerobic system.

Basically the first two are simply prepping your system, and are not providing any threshold gains in and of themselves. Gains in studies have been on the order of 2-3x standard 20min intervals. My favorite intervals by far.</description>
  <tags>
    <tag name="chill"></tag>
    <tag name="bill"></tag>
  </tags>
  <workout>
    <Warmup Duration="300" PowerLow="0.25" PowerHigh="0.75"/>
    <SteadyState Duration="300" Power="1.03"/>
    <SteadyState Duration="60" Power="0.5"/>
    <SteadyState Duration="300" Power="1.04"/>
    <SteadyState Duration="60" Power="0.5"/>
    <SteadyState Duration="300" Power="1.05"/>
    <SteadyState Duration="60" Power="0.5"/>
    <SteadyState Duration="300" Power="1.06"/>
    <SteadyState Duration="60" Power="0.5"/>
    <SteadyState Duration="300" Power="1.07"/>
    <Cooldown Duration="300" PowerLow="0.75" PowerHigh="0.25"/>
  </workout>
</workout_file>
`,
`<workout_file>
<author>R.Manning - Tailwind Coaching</author>
<name>Worst 5 Minutes</name>
<description>This variation of a Tabata workout introduces different length intervals with varying recovery.  It's designed to force you to be explosive when tired and recover in between repeated efforts. 

If you find the "recovery" between the Z7 intervals to be too difficult, reduce the intensity to 75% of FTP.</description>
<sportType>bike</sportType>
<tags>
    <tag name="INTERVALS"/>
</tags>
<workout>
    <Warmup Duration="600" PowerLow="0.2545" PowerHigh="0.75449997" pace="0"/>
    <SteadyState Duration="50" Power="0.95449996" pace="0"/>
    <SteadyState Duration="10" Power="2.0044999" pace="0"/>
    <SteadyState Duration="40" Power="0.95449996" pace="0"/>
    <SteadyState Duration="20" Power="2.0044999" pace="0"/>
    <SteadyState Duration="30" Power="0.95449996" pace="0"/>
    <SteadyState Duration="30" Power="2.0044999" pace="0"/>
    <SteadyState Duration="20" Power="0.95449996" pace="0"/>
    <SteadyState Duration="40" Power="2.0044999" pace="0"/>
    <SteadyState Duration="10" Power="0.95449996" pace="0"/>
    <SteadyState Duration="50" Power="2.0044999" pace="0"/>
    <SteadyState Duration="420" Power="0.65449995" pace="0"/>
    <SteadyState Duration="50" Power="0.95449996" pace="0"/>
    <SteadyState Duration="10" Power="2.0044999" pace="0"/>
    <SteadyState Duration="40" Power="0.95449996" pace="0"/>
    <SteadyState Duration="20" Power="2.0044999" pace="0"/>
    <SteadyState Duration="30" Power="0.95449996" pace="0"/>
    <SteadyState Duration="30" Power="2.0044999" pace="0"/>
    <SteadyState Duration="20" Power="0.95449996" pace="0"/>
    <SteadyState Duration="40" Power="2.0044999" pace="0"/>
    <SteadyState Duration="10" Power="0.95449996" pace="0"/>
    <SteadyState Duration="50" Power="2.0044999" pace="0"/>
    <SteadyState Duration="420" Power="0.65449995" pace="0"/>
    <SteadyState Duration="50" Power="0.95449996" pace="0"/>
    <SteadyState Duration="10" Power="2.0044999" pace="0"/>
    <SteadyState Duration="40" Power="0.95449996" pace="0"/>
    <SteadyState Duration="20" Power="2.0044999" pace="0"/>
    <SteadyState Duration="30" Power="0.95449996" pace="0"/>
    <SteadyState Duration="30" Power="2.0044999" pace="0"/>
    <SteadyState Duration="20" Power="0.95449996" pace="0"/>
    <SteadyState Duration="40" Power="2.0044999" pace="0"/>
    <SteadyState Duration="10" Power="0.95449996" pace="0"/>
    <SteadyState Duration="50" Power="2.0044999" pace="0"/>
    <Cooldown Duration="360" PowerLow="0.75449997" PowerHigh="0.2545" pace="0"/>
</workout>
</workout_file>`,
`<workout_file>
<author>R.Manning - Tailwind Coaching</author>
<name>Aerobic Round Robin</name>
<description>This workout is designed to offer a multitude of aerobic training options.  From longer duration steady state intervals to shorter lactate shuttling intervals, you can perform tons of variations on this workout to build aerobic conditioning.</description>
<sportType>bike</sportType>
<tags>
    <tag name="INTERVALS"/>
</tags>
<workout>
    <Warmup Duration="510" PowerLow="0.45449999" PowerHigh="0.95449996" pace="32767"/>
    <SteadyState Duration="510" Power="0.90449995" pace="32767"/>
    <SteadyState Duration="180" Power="0.64926469" pace="32767"/>
    <SteadyState Duration="510" Power="0.90906858" pace="32767"/>
    <SteadyState Duration="180" Power="0.64926469" pace="32767"/>
    <IntervalsT Repeat="6" OnDuration="60" OffDuration="150" OnPower="1.1044999" OffPower="0.50449997" pace="32767"/>
    <FreeRide Duration="180" FlatRoad="1"/>
</workout>
</workout_file>`,
`<workout_file>
<author>R.Manning - Tailwind Coaching</author>
<name>Early Base Grab Bag</name>
<description>This workout is the perfect "any day" base building workout.  Specifically designed for use in the early base phase, it offers plenty of opportunity to build aerobic conditioning.  You'll also get a little bit of higher intensity work to keep your body honest and get you used to interval work that comes later in a periodized training program.</description>
<sportType>bike</sportType>
<tags>
    <tag name="INTERVALS"/>
</tags>
<workout>
    <Warmup Duration="300" PowerLow="0.2545" PowerHigh="0.90449995" pace="0"/>
    <SteadyState Duration="540" Power="0.91449994" pace="0"/>
    <SteadyState Duration="60" Power="1.1044999" pace="0"/>
    <SteadyState Duration="300" Power="0.6045" pace="0"/>
    <SteadyState Duration="540" Power="0.91449994" pace="0"/>
    <SteadyState Duration="60" Power="1.1044999" pace="0"/>
    <SteadyState Duration="300" Power="0.6045" pace="0"/>
    <SteadyState Duration="120" Power="1.1044999" pace="0"/>
    <SteadyState Duration="120" Power="0.6045" pace="0"/>
    <SteadyState Duration="120" Power="1.1044999" pace="0"/>
    <SteadyState Duration="120" Power="0.6045" pace="0"/>
    <SteadyState Duration="120" Power="1.1044999" pace="0"/>
    <SteadyState Duration="540" Power="0.91449994" pace="0"/>
    <SteadyState Duration="60" Power="1.1544999" pace="0"/>
    <Cooldown Duration="300" PowerLow="0.91449994" PowerHigh="0.2545" pace="0"/>
</workout>
</workout_file>`,
].map((workout) => parseZwiftWorkoutString(workout))

export { workouts }
